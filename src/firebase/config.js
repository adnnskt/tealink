// Import the functions you need from the SDKs you need
import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBS4zhcE7IvWyK-eObFZNFkGWtm9MaAa1g",
  authDomain: "tealink-e1160.firebaseapp.com",
  projectId: "tealink-e1160",
  databaseURL: 'https://tealink-e1160-default-rtdb.firebaseio.com/'
  storageBucket: "tealink-e1160.appspot.com",
  messagingSenderId: "122014028964",
  appId: "1:122014028964:web:826bda60c2385db2914231",
  measurementId: "G-Q7LRZ1WD9B"
};

// Initialize Firebase
/*
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
*/

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };