import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDFFHVJ7PT0-lGK_hSV27JytzlHBAZ5nzA",
  authDomain: "fir-login-fdaa7.firebaseapp.com",
  projectId: "fir-login-fdaa7",
  storageBucket: "fir-login-fdaa7.appspot.com",
  messagingSenderId: "280168609412",
  appId: "1:280168609412:web:a6a5f206aadff12199b4d1"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth();
export { app, auth };