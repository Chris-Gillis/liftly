// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlfeBQd9RzZPd-ZUlG7ot2WWJEn8WLhBI",
  authDomain: "liftly-3afed.firebaseapp.com",
  projectId: "liftly-3afed",
  storageBucket: "liftly-3afed.appspot.com",
  messagingSenderId: "177544305100",
  appId: "1:177544305100:web:87bff7dc238e7638572569",
  measurementId: "G-NJCKTC3V3Y"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);