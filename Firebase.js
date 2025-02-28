import { initializeApp } from "firebase/app";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDkuII8w1trFzQ6tmmAYeATcKEHnaGWETY",
  authDomain: "newciti-5a60b.firebaseapp.com",
  projectId: "newciti-5a60b",
  storageBucket: "newciti-5a60b.firebasestorage.app",
  messagingSenderId: "979541426006",
  appId: "1:979541426006:web:5da60642704733720460f7",
  measurementId: "G-8P25KWET6M"
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
const auth = getAuth(app);

// Set persistence to local storage
setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log("Persistence set to local storage.");
  })
  .catch((error) => {
    console.error("Error setting persistence:", error);
  });

// Initialize Firestore
const db = getFirestore(app);

export { auth, db, app };
