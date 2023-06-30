// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRqr51NlBzhyXxT521Arq1oYkwGilhg5k",
  authDomain: "musee-7812d.firebaseapp.com",
  projectId: "musee-7812d",
  storageBucket: "musee-7812d.appspot.com",
  messagingSenderId: "741765668048",
  appId: "1:741765668048:web:82164f037e72f3634552d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);