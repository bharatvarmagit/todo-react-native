import firebase from "firebase/app"
import  "firebase/firestore"

  const firebaseConfig = {
  apiKey: "AIzaSyAGLrXgUmvectzA_aoJajYkIVGksEcI0NM",
  authDomain: "rn-to-do-30e2d.firebaseapp.com",
  databaseURL: "https://rn-to-do-30e2d.firebaseio.com",
  projectId: "rn-to-do-30e2d",
  storageBucket: "rn-to-do-30e2d.appspot.com",
  messagingSenderId: "290101464817",
  appId: "1:290101464817:web:a24cb047b35ce12ea72350",
  measurementId: "G-4ZP12NBBTK",
};

let Firebase=firebase.initializeApp(firebaseConfig)


export default Firebase;
export const Firestore=firebase.firestore();
