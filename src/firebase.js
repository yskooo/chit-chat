// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// To-do: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCaJZ5AjVHzSl4mBm7ifN0jQTA-YRUOHyc",
    authDomain: "chat-app-f994e.firebaseapp.com",
    projectId: "chat-app-f994e",
    storageBucket: "chat-app-f994e.appspot.com",
    messagingSenderId: "900918162113",
    appId: "1:900918162113:web:cce2ccdd463d1cdf189a40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)