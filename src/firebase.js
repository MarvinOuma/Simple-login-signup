// Firebase configuration and initialization
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyALH91KF9fhmu4Xz8dj24A5p0kOa2Wppjo",
  authDomain: "signuplogin-53db2.firebaseapp.com",
  projectId: "signuplogin-53db2",
  storageBucket: "signuplogin-53db2.appspot.com",
  messagingSenderId: "430735524784",
  appId: "1:430735524784:web:278939c2102f8d55eb0c75",
  measurementId: "G-BR75WTS083"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
