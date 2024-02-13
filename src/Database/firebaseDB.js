import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyChZw34vW-94dVPdu0uNJIJHthdnuko78E",
  authDomain: "mystory-ecb54.firebaseapp.com",
  projectId: "mystory-ecb54",
  databaseURL : "https://mystory-ecb54-default-rtdb.asia-southeast1.firebasedatabase.app/",
  storageBucket: "mystory-ecb54.appspot.com",
  messagingSenderId: "29781172894",
  appId: "1:29781172894:web:f6774db816dc76e519918f"
};



// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app)
export const refe =  ref;
export const sett = set;
