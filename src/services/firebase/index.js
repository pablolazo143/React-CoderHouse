// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVhEQhq55t0ZdyqcZrxcnev9urMJUHau4",
  authDomain: "backend-thewhiskeria.firebaseapp.com",
  projectId: "backend-thewhiskeria",
  storageBucket: "backend-thewhiskeria.appspot.com",
  messagingSenderId: "222639137883",
  appId: "1:222639137883:web:c54cd235a7f1cc8c610b7e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)