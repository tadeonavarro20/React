
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA5psz9XqChAS2ueWEodPCwkljW5Wi5rFs",
  authDomain: "trendy-threads-86547.firebaseapp.com",
  projectId: "trendy-threads-86547",
  storageBucket: "trendy-threads-86547.appspot.com",
  messagingSenderId: "923503913183",
  appId: "1:923503913183:web:4262180a090aa42780e16a"
};


initializeApp(firebaseConfig);

const db = getFirestore()

export default db