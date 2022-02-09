import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCxuFq0YBPCvS7EAL7uivpuq4osd3bgegM",
  authDomain: "phone-auth-ed776.firebaseapp.com",
  projectId: "phone-auth-ed776",
  storageBucket: "phone-auth-ed776.appspot.com",
  messagingSenderId: "894719339129",
  appId: "1:894719339129:web:2ad410e23d925a17e542a8",
  measurementId: "G-HSWLDQHCM1",
};

const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);
authentication.languageCode = "en";
