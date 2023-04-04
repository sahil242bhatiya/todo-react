import {addDoc, collection, getDocs} from 'firebase/firestore';
import {verifyTodoObject} from "../../utils/todo-verification.js";
import {Timestamp} from "firebase/firestore";
import {db} from "./init.js";

const docName = 'todos';
export const AddTodoToFirestore = async (todo) => {
    if (verifyTodoObject(todo) === false) {
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
    return response.id;
}

export const GetAllTodosFromFirestore = async () => {
    const querySnapshot = await getDocs(collection(db, docName));
    const todos = [];
    querySnapshot.forEach((doc) => {
        todos.push(doc.data());
    });
    return todos;
}