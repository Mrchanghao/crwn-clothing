import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDSUWFDZrURQy8LvGZSlQDewAEv9uUMmH4",
  authDomain: "crwn-e690e.firebaseapp.com",
  databaseURL: "https://crwn-e690e.firebaseio.com",
  projectId: "crwn-e690e",
  storageBucket: "crwn-e690e.appspot.com",
  messagingSenderId: "223295260400",
  appId: "1:223295260400:web:e619c726526035d1e66435",
  measurementId: "G-R6V95W1F8G"
};
// Initialize Firebase
firebase.initializeApp(config);
// firebase.analytics();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;