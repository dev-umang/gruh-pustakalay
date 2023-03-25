// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGT4Pa5rFiakoIkOKw56Sj0OZsDfYDnls",
  authDomain: "pustak-app-9e340.firebaseapp.com",
  databaseURL:
    "https://pustak-app-9e340-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "pustak-app-9e340",
  storageBucket: "pustak-app-9e340.appspot.com",
  messagingSenderId: "141324272964",
  appId: "1:141324272964:web:946141f7d2465714810311",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const Firestore = getFirestore(app);
export const RTDatabase = getDatabase(app);
