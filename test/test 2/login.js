import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js";
import { auth } from "./firebase-config.js";

const email_inp = document.querySelector("#email");
const password_inp = document.querySelector("#password");

async function handleLogin(event) {
    event.preventDefault();

    const email = email_inp.value.trim();
    const password = password_inp.value.trim();

    if (!email || !password) {
        alert("Please fill all the blank!");
        return;
    }

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        alert("Login successfully!");
        console.log("User:", user);
    } catch (error) {
        console.error("Error code:", error.code, "message:", error.message);
        alert("Login failed: " + error.message);
    }
}

document.querySelector("#btn_login").addEventListener("click", handleLogin);
