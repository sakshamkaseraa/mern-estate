// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-esate-42d8e.firebaseapp.com",
  projectId: "mern-esate-42d8e",
  storageBucket: "mern-esate-42d8e.appspot.com",
  messagingSenderId: "240998048982",
  appId: "1:240998048982:web:d7bbae5d37a8e70b1b9577"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);