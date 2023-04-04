import {useState} from "react";
import {TodoCard} from "./TodoCard.jsx";
import {AddTodoToFirestore} from "../firebase/functions/todo-backend.js";

export function AddTodo() {
    const [todo, setTodo] = useState({
        title: '',
        description: '',
        completed: false
    })

    const AddToDatabase = async () => {
        const res = await AddTodoToFirestore(todo);
        if(res) {
            setTodo({
                title: '',
                description: '',
                completed: false
            })
        }
    }

    return (
        <>
            <div>
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
                    onClick={AddToDatabase}
                >Add
                </button>
            </div>
            <div>
                <TodoCard todo={todo}/>
            </div>
        </>
    )
}