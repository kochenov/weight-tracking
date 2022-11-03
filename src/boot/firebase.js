// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDgWq0nrcfVinWWSp_3vDfpdji9J6ITRUc",
  authDomain: "dreammanor-ed9ac.firebaseapp.com", //https://dreammanor-ed9ac-default-rtdb.europe-west1.firebasedatabase.app
  projectId: "dreammanor-ed9ac",
  storageBucket: "dreammanor-ed9ac.appspot.com",
  messagingSenderId: "406501789962",
  appId: "1:406501789962:web:c0e0bd99abc8026201aaf3",
  databaseURL:
    "https://dreammanor-ed9ac-default-rtdb.europe-west1.firebasedatabase.app/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);
export { db, auth };
