import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-firestore.js";
import { auth, db } from "./firebase-config.js";


const username_inp = document.querySelector("#username");
const email_inp = document.querySelector("#email");
const password_inp = document.querySelector("#password");
const confirm_password_inp = document.querySelector("#confirm_password");

async function handleRegister(event) {
    event.preventDefault();

    const username = username_inp.value.trim();
    const email = email_inp.value.trim();
    const password = password_inp.value.trim();
    const confirm_password = confirm_password_inp.value.trim();

    if (!username || !email || !password || !confirm_password) {
        alert("Please fill all the blank!");
        return;
    }

    if (password !== confirm_password) {
        alert("Password or confirm password is incorrect!");
        return;
    }

    try {
        const authInstance = getAuth();
        const userCredential = await createUserWithEmailAndPassword(authInstance, email, password);
        const user = userCredential.user;

        const userData = {
            username,
            email,
            role_id: "user",
            balance: 0,
            createdAt: new Date()
        };

        await setDoc(doc(db, "users", user.uid), userData);
        alert("Register successfully!");
    } catch (error) {
        console.error("Error code:", error.code, "message:", error.message);
        alert("Register failed: " + error.message);
    }
}

document.querySelector("#btn_register").addEventListener("click", handleRegister);
