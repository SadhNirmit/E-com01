import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCjzehx84BU0c4wB7-2BIzLYsnDrJ73pIc",
  authDomain: "maltimart-35731.firebaseapp.com",
  projectId: "maltimart-35731",
  storageBucket: "maltimart-35731.appspot.com",
  messagingSenderId: "871747521803",
  appId: "1:871747521803:web:e80f815ee871728109660e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app;