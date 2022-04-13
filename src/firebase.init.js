// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByicZH2Qg9RZTj3kqcGOhzaVCPNKbUTKM",
  authDomain: "router-firebase-integrat-c37dd.firebaseapp.com",
  projectId: "router-firebase-integrat-c37dd",
  storageBucket: "router-firebase-integrat-c37dd.appspot.com",
  messagingSenderId: "468114837151",
  appId: "1:468114837151:web:c4b1faea84e2f2466b1caa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app