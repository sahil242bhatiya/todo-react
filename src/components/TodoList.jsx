import {GetAllTodosFromFirestore} from "../firebase/functions/todo-backend.js";
import {useEffect} from "react";

export function TodoList() {

    useEffect(() => {
        GetAllTodosFromFirestore().then(res => {
            console.log(res);
        } )
    }, []);

    return (
        <>
            <h1>Todo List</h1>
        </>
    )
}