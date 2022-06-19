import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCkjGsxGP4At4uFwmOD9b_OBJSy5sOAU-c",
  authDomain: "matilda-225a0.firebaseapp.com",
  projectId: "matilda-225a0",
  storageBucket: "matilda-225a0.appspot.com",
  messagingSenderId: "952751529992",
  appId: "1:952751529992:web:c7a26616a67e56282771bd"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};