import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth'
import 'firebase/compat/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6lnUNEG1jXNW8-Z19JTLYsQt6_Vz2P1Q",
  authDomain: "olx-clone-f82a1.firebaseapp.com",
  projectId: "olx-clone-f82a1",
  storageBucket: "olx-clone-f82a1.appspot.com",
  messagingSenderId: "658864898169",
  appId: "1:658864898169:web:53222ff17cae8d37f3d4a8",
  measurementId: "G-W042HZP3DN"
};

  const FirebaseApp=firebase.initializeApp(firebaseConfig)
  export const auth=FirebaseApp.auth()
  export const db=FirebaseApp.firestore()
  export const storage=FirebaseApp.storage()