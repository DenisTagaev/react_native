// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3v5mL0Kv1QX35xANmbccDG3Jmv4NXMqk",
  authDomain: "react-native-final-a3ee8.firebaseapp.com",
  projectId: "react-native-final-a3ee8",
  storageBucket: "react-native-final-a3ee8.appspot.com",
  messagingSenderId: "653016809308",
  appId: "1:653016809308:web:67b9672fe8237ab7938b99",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);