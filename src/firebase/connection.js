
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDV4t5VF2Bc5GVS8Cpxk0NkO_Dut5TOlcQ",
  authDomain: "app-burguermu.firebaseapp.com",
  projectId: "app-burguermu",
  storageBucket: "app-burguermu.firebasestorage.app",
  messagingSenderId: "679623618411",
  appId: "1:679623618411:web:1a2418424137ffd6d4e62e"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
 
const db = getFirestore(app);
 
export { db };