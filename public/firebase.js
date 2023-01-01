import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqRuAnkMD3CTm7O1TwM5_2hczt5cUv7i4",
  authDomain: "mohssine-mochaffaa.firebaseapp.com",
  projectId: "mohssine-mochaffaa",
  storageBucket: "mohssine-mochaffaa.appspot.com",
  messagingSenderId: "877873438761",
  appId: "1:877873438761:web:577112a5bfd2ac6fe1fc38",
  measurementId: "G-NP8Z3C8862"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db;
