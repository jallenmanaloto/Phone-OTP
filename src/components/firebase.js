import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCh6wOvR_IJ7ujMOscpI2TnrDoPirJ4PQk",
  authDomain: "fir-auth-945ff.firebaseapp.com",
  projectId: "fir-auth-945ff",
  storageBucket: "fir-auth-945ff.appspot.com",
  messagingSenderId: "72324529483",
  appId: "1:72324529483:web:f1be45d5bb9883a4473cce",
  measurementId: "G-LKN52Y26F6",
};

const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);
authentication.languageCode = "en";
