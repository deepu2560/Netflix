// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWS__CwO_ohmU4z5UEeyqTqya4aA0myfM",
  authDomain: "netflixappclone-72891.firebaseapp.com",
  projectId: "netflixappclone-72891",
  storageBucket: "netflixappclone-72891.appspot.com",
  messagingSenderId: "366970699354",
  appId: "1:366970699354:web:a73ec5fc4f0ded64ad6263",
  measurementId: "G-RKPKQLMXVP"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
