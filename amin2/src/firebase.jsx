// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWC18tj3KnVUm5Sf9SCrrUuU9dn8hU4e4",
  authDomain: "netflix-clone-e78b1.firebaseapp.com",
  projectId: "netflix-clone-e78b1",
  storageBucket: "netflix-clone-e78b1.appspot.com",
  messagingSenderId: "222671643540",
  appId: "1:222671643540:web:897d1cf091eeb2eaab2581",
  measurementId: "G-GTY3F3L25B",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
