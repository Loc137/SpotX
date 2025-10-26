// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDA2D7Kjetw_oeJEE0d9xMdEBJEZLJiIGc",
    authDomain: "test-1-b99bb.firebaseapp.com",
    projectId: "test-1-b99bb",
    storageBucket: "test-1-b99bb.firebasestorage.app",
    messagingSenderId: "368367167541",
    appId: "1:368367167541:web:6589fa4c92b0a65ece697c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { auth, db }