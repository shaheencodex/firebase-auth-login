// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDITDfP57ifLkOcrBBm9EwSB19b5bmJo5E",
  authDomain: "login-page-c1951.firebaseapp.com",
  projectId: "login-page-c1951",
  storageBucket: "login-page-c1951.firebasestorage.app",
  messagingSenderId: "681462283351",
  appId: "1:681462283351:web:4e522e9bd3875455d57712",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export default app;
