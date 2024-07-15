import { getApps, getApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBNKFkHOvEpBeGFH-1AxlDU4mf82jnVnBc",
  authDomain: "codepen-e849a.firebaseapp.com",
  projectId: "codepen-e849a",
  storageBucket: "codepen-e849a.appspot.com",
  messagingSenderId: "791861134890",
  appId: "1:791861134890:web:f10cfb50bc00580e7f6553",
  measurementId: "G-2J0RYZ9192"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
