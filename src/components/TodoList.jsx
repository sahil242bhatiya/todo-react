import {
    GetAllCompletedTodosFromFirestore,
    GetAllIncompletedTodosFromFirestore
} from "../firebase/functions/todo-backend.js";
import {useContext, useEffect, useState} from "react";
import {TodoCard} from "./TodoCard.jsx";
import addTodoContext from "../context/todos/addTodoContext.js";

export function TodoList() {
    const [completedTodos, setCompletedTodos] = useState([]);
    const [incompletedTodos, setIncompletedTodos] = useState([]);
    const isTodoAdded = useContext(addTodoContext);
    const fetchTodos = () => {
        GetAllIncompletedTodosFromFirestore().then(res => {
            setIncompletedTodos(res)
        })
        GetAllCompletedTodosFromFirestore().then(res => {
            setCompletedTodos(res)
        })
    }
    useEffect(() => {
        fetchTodos()
    }, []);

    useEffect(() => {
        fetchTodos()
    }, [isTodoAdded.isAdded === true]);


    return (
        <>
            <h3>Todo List</h3>
            <h3>Incomplete Tasks</h3>
            {incompletedTodos.map(todo => (
                <TodoCard fetchAgain={fetchTodos} showOptions={true} key={todo.id} todo={todo}/>
            ))}
            <h3>Completed Tasks</h3>
            {completedTodos.map(todo => (
                <TodoCard fetchAgain={fetchTodos} showOptions={true} key={todo.id} todo={todo}/>
            ))}
        </>
    )
}