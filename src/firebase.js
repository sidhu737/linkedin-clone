// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJmWD4ajtWOUNG_FHYcuGBVIMg6-1Npbc",
  authDomain: "linkedin-clone-e4de6.firebaseapp.com",
  projectId: "linkedin-clone-e4de6",
  storageBucket: "linkedin-clone-e4de6.appspot.com",
  messagingSenderId: "77844436242",
  appId: "1:77844436242:web:b07bdecda9e172a1a18fcb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();
