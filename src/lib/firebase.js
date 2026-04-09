import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// ----------------------------------------------------------------------------------
// FIXME: REPLACE THESE EMPTY STRINGS WITH YOUR REAL KEYS FROM YOUR FIREBASE CONSOLE!
// ----------------------------------------------------------------------------------
const firebaseConfig = {
  apiKey: "AIzaSyC4GQY0xwta4uIl7om6PLgPOYnLLpsxnOE",
  authDomain: "learnplus-auth.firebaseapp.com",
  projectId: "learnplus-auth",
  storageBucket: "learnplus-auth.firebasestorage.app",
  messagingSenderId: "697074337199",
  appId: "1:697074337199:web:f4e6450205e7021feddb5a",
  measurementId: "G-Y0MFP4ZGN5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export { auth, db, googleProvider, githubProvider };
