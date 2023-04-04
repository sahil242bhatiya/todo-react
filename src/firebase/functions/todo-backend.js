import {addDoc, collection, doc, getDocs, query, Timestamp, updateDoc, where, deleteDoc} from 'firebase/firestore';
import {verifyTodoObject} from "../../utils/todo-verification.js";
import {db} from "./init.js";
import {isDev} from "../../utils/basicChecks.js";

const docName = 'todos';
export const AddTodoToFirestore = async (todo) => {
    if (verifyTodoObject(todo) === false) {
        if (isDev)
            console.log("AddTodoToFirestore: Todo object is not valid");
        return null;
    }
    const response = await addDoc(collection(db, docName), {
        title: todo.title,
        description: todo.description,
        completed: false,
        userId: "",
        sharedWith: [],
        timestamp: Timestamp.now()
    });
    if (isDev)
        console.log("AddTodoToFirestore: Added todo with ID: ", response.id);
    return response.id;
}

export const SetTodoCompleted = async (todoId, completed) => {
    const todoRef = doc(db, docName, todoId);
    if (todoRef === null) {
        if (isDev)
            console.log("SetTodoCompleted: Todo not found");
        return null;
    }
    const response = await updateDoc(todoRef, {
        completed: completed
    });
    if (isDev)
        console.log("SetTodoCompleted: Set todo completed: ", completed);
    return response;
}

export const GetAllCompletedTodosFromFirestore = async () => {
    const todoCollection = collection(db, docName);
    const querySnapshot = await getDocs(query(todoCollection, where("completed", "==", true)));
    const completedTodos = (querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))).sort((a, b) => {
        return b.timestamp.seconds - a.timestamp.seconds;
    });
    if (isDev)
        console.log("GetAllCompletedTodosFromFirestore: Got all completed todos: ", completedTodos);
    return completedTodos;
}

export const GetAllIncompletedTodosFromFirestore = async () => {
    const todoCollection = collection(db, docName);
    const querySnapshot = await getDocs(query(todoCollection, where("completed", "!=", true)));
    const completedTodos = (querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))).sort((a, b) => {
        return b.timestamp.seconds - a.timestamp.seconds;
    });
    if (isDev)
        console.log("GetAllCompletedTodosFromFirestore: Got all completed todos: ", completedTodos);
    return completedTodos;
}

export const DeleteTodoFromFirestore = async (todoId) => {
    const todoRef = doc(db, docName, todoId);
    if (todoRef === null) {
        if (isDev)
            console.log("DeleteTodoFromFirestore: Todo not found");
        return null;
    }
    const response = await deleteDoc(todoRef);
    if (isDev)
        console.log("DeleteTodoFromFirestore: Deleted todo with ID: ", todoId);
    return response;
}