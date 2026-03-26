// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCg6emivXDruZjKuqsA912XfH1ZyH5-poo",
  authDomain: "dotest-80528.firebaseapp.com",
  projectId: "dotest-80528",
  storageBucket: "dotest-80528.firebasestorage.app",
  messagingSenderId: "1029831205166",
  appId: "1:1029831205166:web:a70f19e2645ff5c1d6dabf",
  measurementId: "G-97SRWS0LLF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore(app);
export default app