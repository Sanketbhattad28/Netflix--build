import firebase from "firebase";
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBfy1LxDR02xJpL_aXTCfZzg1C2_C_zgCw",
  authDomain: "netflix-build-f1986.firebaseapp.com",
  projectId: "netflix-build-f1986",
  storageBucket: "netflix-build-f1986.appspot.com",
  messagingSenderId: "113919138308",
  appId: "1:113919138308:web:6f6d67be10192e4502b351",
};

//initializeApp(firebaseConfig);
//const db = firebaseApp.firestore();
//const auth = getAuth();

//export { auth };
//export default db;
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
