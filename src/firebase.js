import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "fox-academy-569c1.firebaseapp.com",
  projectId: "fox-academy-569c1",
  storageBucket: "fox-academy-569c1.appspot.com",
  messagingSenderId: "968739904499",
  appId: "1:968739904499:web:9dbef5c5aae09db8311086",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
