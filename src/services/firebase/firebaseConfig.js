import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBXPCs7YMC3Wjq3kUy3Z17hIsHXDqtZ-xI",
  authDomain: "ecommerce-18eca.firebaseapp.com",
  projectId: "ecommerce-18eca",
  storageBucket: "ecommerce-18eca.appspot.com",
  messagingSenderId: "602524669985",
  appId: "1:602524669985:web:284fd9c45a0cae1fbfab60"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
