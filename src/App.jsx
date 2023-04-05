import './App.css'
import React from "react";
import AddTodoState from "./context/todos/addTodoState";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/index.jsx";
import Login from "./pages/login/index.jsx";

function App() {
    return (
        <AddTodoState>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </AddTodoState>
    )
}

export default App
