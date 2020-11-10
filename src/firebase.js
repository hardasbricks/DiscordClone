import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA0jBrNtcqsMMzLdsmieb7xLf7m4ZJp1Ik",
  authDomain: "discord-clone-aa454.firebaseapp.com",
  databaseURL: "https://discord-clone-aa454.firebaseio.com",
  projectId: "discord-clone-aa454",
  storageBucket: "discord-clone-aa454.appspot.com",
  messagingSenderId: "15398573498",
  appId: "1:15398573498:web:e8098d8b143f22adf87983",
  measurementId: "G-VG7YG7LGNH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;
