// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADCZG74eL2OGs6Bz5uBajrAdhQmL-jIt8",
  authDomain: "cw-techtrack.firebaseapp.com",
  databaseURL: "https://cw-techtrack-default-rtdb.firebaseio.com", // <-- Optional but valid
  projectId: "cw-techtrack",
  storageBucket: "cw-techtrack.firebasestorage.app",
  messagingSenderId: "791503889527",
  appId: "1:791503889527:web:1e9452f3c2327811c31272"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the auth instance to use in your app
export const auth = getAuth(app);
