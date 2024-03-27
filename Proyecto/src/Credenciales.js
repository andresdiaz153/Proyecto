// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpWuPWvsETp_HHePP2lxKuKd8jKJ2QkO0",
  authDomain: "login-register-c634d.firebaseapp.com",
  projectId: "login-register-c634d",
  storageBucket: "login-register-c634d.appspot.com",
  messagingSenderId: "707716003707",
  appId: "1:707716003707:web:12ad303151dc8fb4616fde"
};

// Initialize Firebase
const appFireBase = initializeApp(firebaseConfig);
export default appFireBase;