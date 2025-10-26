// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setupưytr#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDj3BDNalxdOIAK_Klbv7j8L-xQUAE3Wxg",
  authDomain: "testing-61f03.firebaseapp.com",
  projectId: "testing-61f03",
  storageBucket: "testing-61f03.firebasestorage.app",
  messagingSenderId: "18554518589",
  appId: "1:18554518589:web:166ede2c85bdcb355d3e54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);