import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA_zwtr5oCA1osq-Vr_zc0xu5v4bPzdxi4",
  authDomain: "intelli-a2faa.firebaseapp.com",
  projectId: "intelli-a2faa",
  storageBucket: "intelli-a2faa.appspot.com",
  messagingSenderId: "42942344839",
  appId: "1:42942344839:web:4e3df08e31d30dd4365222",
  measurementId: "G-9CT9BJ4EBS",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

export { auth, db };
