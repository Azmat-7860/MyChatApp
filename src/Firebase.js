import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA11oVCv4S-0-42FrUhck6h1lLL6dXAEtc",
  authDomain: "chatapp-16014.firebaseapp.com",
  projectId: "chatapp-16014",
  storageBucket: "chatapp-16014.firebasestorage.app",
  messagingSenderId: "881184754462",
  appId: "1:881184754462:web:e7388697d4f4205aefd70f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore()