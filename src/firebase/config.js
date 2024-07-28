// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAV-GHU9UvdvJRL3ZrWjXlMKfI-dU9RZ-s",
  authDomain: "shopcarpi.firebaseapp.com",
  projectId: "shopcarpi",
  storageBucket: "shopcarpi.appspot.com",
  messagingSenderId: "8647233289",
  appId: "1:8647233289:web:be2e2400619bf81ea48dd8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);