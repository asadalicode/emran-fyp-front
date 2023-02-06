// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDOKHRH7KRKCcrfr5ATgFZyIa22Y1x5J78",
    authDomain: "react-gsmt.firebaseapp.com",
    projectId: "react-gsmt",
    storageBucket: "react-gsmt.appspot.com",
    messagingSenderId: "12647244067",
    appId: "1:12647244067:web:6d6daa5e19e3d2405d2c96"
};

// Initialize Firebase
const fireDb = firebase.initializeApp(firebaseConfig)
export const fireAb = fireDb.database().ref();
// const app = initializeApp(firebaseConfig);