// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-v2.firebaseapp.com",
  projectId: "mern-auth-v2",
  storageBucket: "mern-auth-v2.appspot.com",
  messagingSenderId: "857781432454",
  appId: "1:857781432454:web:9575b4056b394be7a72107"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);