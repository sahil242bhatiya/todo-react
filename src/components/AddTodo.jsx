import {useContext, useState} from "react";
import {TodoCard} from "./TodoCard.jsx";
import {AddTodoToFirestore} from "../firebase/functions/todo-backend.js";
import addTodoContext from "../context/todos/addTodoContext.js";

export function AddTodo() {
    const [todo, setTodo] = useState({
        title: '',
        description: '',
        completed: false
    })
    const isAdded = useContext(addTodoContext);

    const AddToDatabase = async (e) => {
        e.preventDefault();
        const res = await AddTodoToFirestore(todo);
        if(res) {
            setTodo({
                title: '',
                description: '',
                completed: false
            })
            isAdded.updateIsAdded()
        }
    }

    return (
        <>
            <form onSubmit={AddToDatabase}>
                <h3>
                    Add Entry
                </h3>
                <label htmlFor="title">Title</label>
                <input type="text"
                       name={'title'}
                       value={todo.title}
                       onChange={e => setTodo({
                           ...todo,
                           title: e.target.value
                       })}
                />

                <label htmlFor="description">Description</label>
                <input type="text"
                       name={'description'}
                       value={todo.description}
                       onChange={e => setTodo({
                           ...todo,
                           description: e.target.value
                       })}
                />

                <button
                    type={"submit"}
                    onSubmit={AddToDatabase}
                >Add
                </button>
            </form>
        </>
    )
}