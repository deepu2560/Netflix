// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdCkmBcsmHmbr9YfvSaGpPOc9uceB_bQI",
  authDomain: "netflixclone-cb790.firebaseapp.com",
  projectId: "netflixclone-cb790",
  storageBucket: "netflixclone-cb790.appspot.com",
  messagingSenderId: "199837786273",
  appId: "1:199837786273:web:e32170026ac529514f50e0",
  measurementId: "G-1HZL0PSZYS",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
