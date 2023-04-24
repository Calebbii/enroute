// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALVChobAy6ULhhZCFN0PgPUNoOnwhYcxU",
  authDomain: "enroute-60342.firebaseapp.com",
  projectId: "enroute-60342",
  storageBucket: "enroute-60342.appspot.com",
  messagingSenderId: "760821744172",
  appId: "1:760821744172:web:c771b20c4482f90ca1c789"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { app, auth };
