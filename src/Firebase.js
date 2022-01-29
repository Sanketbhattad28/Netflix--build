import firebase from "firebase";
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB8nx3Rc376VFxs0aJFSt5LbfmDT7VImMM",
  authDomain: "netflix-clone-sb28.firebaseapp.com",
  projectId: "netflix-clone-sb28",
  storageBucket: "netflix-clone-sb28.appspot.com",
  messagingSenderId: "253425952336",
  appId: "1:253425952336:web:55f9f73dbdf3a8b5349355",
};
//initializeApp(firebaseConfig);
//const db = firebaseApp.firestore();
//const auth = getAuth();

//export { auth };
//export default db;
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { auth };
export default db;
