// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBMuQQYgVeA7vLp7RohLYiXg2UzYEo4vps",
  authDomain: "monkey-blogging-35109.firebaseapp.com",
  projectId: "monkey-blogging-35109",
  storageBucket: "monkey-blogging-35109.appspot.com",
  messagingSenderId: "67014682655",
  appId: "1:67014682655:web:dc77283a4fbfde2ea20d2a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
