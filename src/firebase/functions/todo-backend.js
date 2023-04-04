import {addDoc, collection, getDocs} from 'firebase/firestore';
import firebase from "firebase/compat";

export const AddTodo = async (todo) => {
    const response = await addDoc(collection(db, 'todos'), {
        title: todo.title,
        description: todo.description,
        completed: false,
        timestamp: firebase.firestore.Timestamp.now()
    });
}