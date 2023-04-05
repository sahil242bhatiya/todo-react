import React from "react";
import {AddTodo} from "../../components/AddTodo.jsx";
import {TodoList} from "../../components/TodoList.jsx";

export default function Home() {
    return (
        <div>
            <h1>Todo App</h1>
            <AddTodo/>
            <TodoList />
        </div>
    )
}