// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLmqh9T4aBlC-JMOc5IunUtDH_o7fvz-M",
  authDomain: "netflix-e6e31.firebaseapp.com",
  projectId: "netflix-e6e31",
  storageBucket: "netflix-e6e31.appspot.com",
  messagingSenderId: "151204956945",
  appId: "1:151204956945:web:7f6b89263012774af21ab0",
  measurementId: "G-W05SZGXRNM"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
