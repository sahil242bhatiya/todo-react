import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAj19-6HLf3hpVbwCUgu8uj_Usk79cMvsQ",
    authDomain: "todo-dev-sahil.firebaseapp.com",
    projectId: "todo-dev-sahil",
    storageBucket: "todo-dev-sahil.appspot.com",
    messagingSenderId: "80659257094",
    appId: "1:80659257094:web:e9d46b82d100ebf4ce3087"
}

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export default app;