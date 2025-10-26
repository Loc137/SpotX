// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyB5_s13-omTVvE4hxbfmL_QmDptFKPaAEY",
    authDomain: "mindx-coffee-class.firebaseapp.com",
    projectId: "mindx-coffee-class",
    storageBucket: "mindx-coffee-class.firebasestorage.app",
    messagingSenderId: "812972858079",
    appId: "1:812972858079:web:8ddb4f3feb3d31c76f676a",
    measurementId: "G-7QFB2560PX"
};

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
  // Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export {auth,db}