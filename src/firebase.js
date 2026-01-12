// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCi-dRfcMUBLPSwj2xYcTdWmXSOYeYMfkg",
  authDomain: "personal-db-8afe4.firebaseapp.com",
  databaseURL: "https://personal-db-8afe4-default-rtdb.firebaseio.com",
  projectId: "personal-db-8afe4",
  storageBucket: "personal-db-8afe4.firebasestorage.app",
  messagingSenderId: "109171031987",
  appId: "1:109171031987:web:c39a4f9cae61324abc55c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);