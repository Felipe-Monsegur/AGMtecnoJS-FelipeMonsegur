import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyChcm72TdL9KbvWsQSL5sAbFVMQ5lkQIDo",
  authDomain: "agmtecnojs.firebaseapp.com",
  projectId: "agmtecnojs",
  storageBucket: "agmtecnojs.appspot.com",
  messagingSenderId: "343234404681",
  appId: "1:343234404681:web:0d4ab9fd754760ca2f3a98",
  measurementId: "G-QE9NSGL9LS"
};

export const app = initializeApp(firebaseConfig); //FirebaseApp 
export const db = getFirestore(app); //Firestore


