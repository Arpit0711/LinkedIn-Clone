import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBopiI6grh-4I6zG-m9Xue33qJ7H1z88h0",
  authDomain: "linkedin-clone-a3a29.firebaseapp.com",
  projectId: "linkedin-clone-a3a29",
  storageBucket: "linkedin-clone-a3a29.appspot.com",
  messagingSenderId: "41595741184",
  appId: "1:41595741184:web:86afd6f7a562ce9cb4a4e5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
