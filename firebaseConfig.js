// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyB_HLxtfGDGdVjGo_1-6WQOhqAhsn7hj8M",
  authDomain: "collegekart-7154d.firebaseapp.com",
  projectId: "collegekart-7154d",
  storageBucket: "collegekart-7154d.firebasestorage.app",
  messagingSenderId: "447897092082",
  appId: "1:447897092082:web:1028586d57a9fd60fdf56b",
  measurementId: "G-NRRCC2WJ5S"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
