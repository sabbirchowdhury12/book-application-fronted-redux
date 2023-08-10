import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCv7Pvtx5RYYeQx2Az343Olv2o9zyY0T5A",
  authDomain: "simple-firebase-project-c7f76.firebaseapp.com",
  projectId: "simple-firebase-project-c7f76",
  storageBucket: "simple-firebase-project-c7f76.appspot.com",
  messagingSenderId: "633853513346",
  appId: "1:633853513346:web:171ee3083e12545ce2ae9b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
