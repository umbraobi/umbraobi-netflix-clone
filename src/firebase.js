import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyBw6jZNypeX_E0b6AUue1U8OjU7IMFVuOs",
  authDomain: "netflix-clone-5508f.firebaseapp.com",
  projectId: "netflix-clone-5508f",
  storageBucket: "netflix-clone-5508f.firebasestorage.app",
  messagingSenderId: "253710799941",
  appId: "1:253710799941:web:45d99ead5400314864ff2c",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.error(error);
    toast.error(error.code.split("/")[1].replaceAll("-", " "));
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1].replaceAll("-", " "));
  }
};

const logout = () => {
  signOut(auth);
};

export { auth, db, signup, login, logout };
