import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB33Xf4K1TvJKJY9k-KnnIdwggJFZNRPaQ",
    authDomain: "clone-68b09.firebaseapp.com",
    projectId: "clone-68b09",
    storageBucket: "clone-68b09.appspot.com",
    messagingSenderId: "776802048961",
    appId: "1:776802048961:web:1417624d23c02695e0ad40",
    measurementId: "G-33CYCG3CZP"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);


  // Initialize Cloud Firestore and get a reference to the service
const db = firebaseApp.firestore();
const auth = firebase.auth();
export {db,auth};