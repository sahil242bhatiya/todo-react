import './App.css'
import {AddTodo} from "./components/AddTodo.jsx";
import React from "react";
import {TodoList} from "./components/TodoList.jsx";
import AddTodoState from "./context/todos/addTodoState";

function App() {
    return (
        <div className="App">
            <h1>Todo App</h1>
            <AddTodoState>
                <AddTodo/>
                <TodoList />
            </AddTodoState>
        </div>
    )
}

export default App
