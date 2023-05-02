import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDAoExKvX2NKndUtXVAz42F-HnwTfeRSeY",
  authDomain: "furniture-app-c2331.firebaseapp.com",
  projectId: "furniture-app-c2331",
  storageBucket: "furniture-app-c2331.appspot.com",
  messagingSenderId: "873674711926",
  appId: "1:873674711926:web:c6ce101f8cb36965171057"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app); 

export default app;