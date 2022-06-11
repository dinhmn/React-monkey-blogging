// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBivNNxWFjq9t1Lp41dpn5RcSiDZk4oX08",
  authDomain: "monkey-blogging-9835e.firebaseapp.com",
  projectId: "monkey-blogging-9835e",
  storageBucket: "monkey-blogging-9835e.appspot.com",
  messagingSenderId: "226141349838",
  appId: "1:226141349838:web:230b663a35d96340a7ed9f",
  measurementId: "G-0Q9XTE03JM",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
