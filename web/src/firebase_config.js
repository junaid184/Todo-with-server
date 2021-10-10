// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzLRgWACU9QIlOJMBgn38FWkKYsZatWjg",
  authDomain: "todo-application-react.firebaseapp.com",
  projectId: "todo-application-react",
  storageBucket: "todo-application-react.appspot.com",
  messagingSenderId: "768218016703",
  appId: "1:768218016703:web:2b6b5241107c89cc170f0a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

export {db}; 