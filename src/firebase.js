import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyALzuCGU05uWY0xf18NOWd0qy8Jruc0J2s",
    authDomain: "clone-83297.firebaseapp.com",
    projectId: "clone-83297",
    storageBucket: "clone-83297.appspot.com",
    messagingSenderId: "608774230088",
    appId: "1:608774230088:web:742290284838fe8af8887d"
  };

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = firebase.auth();

export {db,auth};