import { getFirestore } from "firebase/firestore";
import { initializeApp}  from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyC6SYl0boK8U2_cV9BkkXS1ELtMWTz6Zv4",
    authDomain: "todo-ce366.firebaseapp.com",
    projectId: "todo-ce366",
    storageBucket: "todo-ce366.appspot.com",
    messagingSenderId: "187404995492",
    appId: "1:187404995492:web:3d532cce879c520e8a4f31",
    measurementId: "G-WQ00139NJ3"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;