import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyBu3oo_9HC_AVgBmUIT9s6bma1rNth1eJ8",
  authDomain: "react-cursos-fh-f8ca6.firebaseapp.com",
  projectId: "react-cursos-fh-f8ca6",
  storageBucket: "react-cursos-fh-f8ca6.appspot.com",
  messagingSenderId: "583727560771",
  appId: "1:583727560771:web:943dc765ebc5ff68037cf6",
};

// Initialize Firebase
export const Firebaseapp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(Firebaseapp);
export const FirebaseDB = getFirestore(Firebaseapp);
