import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDB61ku68UGUaDoaRok9iXzTPkgdXgeryQ",
  authDomain: "iterms-5f07c.firebaseapp.com",
  projectId: "iterms-5f07c",
  storageBucket: "iterms-5f07c.appspot.com",
  messagingSenderId: "808386821663",
  appId: "1:808386821663:web:82e2292c4dbefcf5815f2a",
};

initializeApp(firebaseConfig);

const auth = getAuth();
const googleAuthProvider = new GoogleAuthProvider();
const facebookAuthProvider = new FacebookAuthProvider();
const db = getFirestore();
const storage = getStorage();

export { auth, db, storage, googleAuthProvider, facebookAuthProvider };
