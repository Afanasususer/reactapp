// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUPt9GvX78g91mHfdKURmKpW8XtUqJwJo",
  authDomain: "react2-887ce.firebaseapp.com",
  projectId: "react2-887ce",
  storageBucket: "react2-887ce.appspot.com",
  messagingSenderId: "1026161503063",
  appId: "1:1026161503063:web:ce3e49c8e7105578b4ec12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);   

export const auth = getAuth(app);
