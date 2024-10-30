// src/firebase.config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDkJy3c9GbFab29FAkomf5lRhw483_IQ1c",
  authDomain: "mascotaconect.firebaseapp.com",
  projectId: "mascotaconect",
  storageBucket: "mascotaconect.appspot.com",
  messagingSenderId: "177281813405",
  appId: "1:177281813405:web:39f5f8f3548931c0833d74",
  measurementId: "G-DYK7TDZLD0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
export const auth = getAuth(app);
