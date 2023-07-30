// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBf80YMI2gQ5WYCcFOqN5D8mrxo4_f8ks4",
  authDomain: "house-marketplace-app-ac900.firebaseapp.com",
  projectId: "house-marketplace-app-ac900",
  storageBucket: "house-marketplace-app-ac900.appspot.com",
  messagingSenderId: "886943840613",
  appId: "1:886943840613:web:859200590f5154b462898c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()