import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey:import.meta.env.VITE_API_KEY  ,
  authDomain: "chatapp-16014.firebaseapp.com",
  projectId: "chatapp-16014",
  storageBucket: "chatapp-16014.firebasestorage.app",
  messagingSenderId: "881184754462",
  appId:import.meta.env.VITE_APP_ID
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore()