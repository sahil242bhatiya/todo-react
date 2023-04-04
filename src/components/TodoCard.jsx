import {DeleteTodoFromFirestore, SetTodoCompleted} from "../firebase/functions/todo-backend.js";

export function TodoCard({todo,fetchAgain, showOptions = false}) {

    const CompleteTodo = async () => {
        SetTodoCompleted(todo.id, !todo.completed).then(res => {
            fetchAgain()
        })
    }

    const DeleteTodo = async () => {
        DeleteTodoFromFirestore(todo.id).then(res => {
             fetchAgain()
         })
    }

    return (
        <>
            {todo && (
                <div>
                    <h4>{todo.title}</h4>
                    <p>{todo.description}</p>
                    {showOptions && (
                        <div>
                            <button
                            onClick={CompleteTodo}
                            >{todo.completed ? "Undo": "Completed"}</button>
                            <button
                            onClick={DeleteTodo}
                            >Delete</button>
                        </div>
                    )}
                </div>
            )}
        </>
    )
}