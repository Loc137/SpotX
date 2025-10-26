import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";
import { auth } from "./firebase-config.js";

//lay gia tri input
const loginForm = document.querySelector("#login-form")
const inpEmail = document.querySelector(".inp-email")
const inpPwd = document.querySelector(".inp-pwd")


async function handleLogin(event) {
    event.preventDefault()

    let email = inpEmail.value.trim()
    let password = inpPwd.value.trim()

    if (!email || !password) {
        alert("Please fill the blank!")
        return
    }

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            const userSession = {
                user:{
                    email:user.email
                },
                expiry: new Date().getTime() + 30*1000
            }
            // Lưu Session vào local dưới dạng json string
            localStorage.setItem("user-session",JSON.stringify(userSession))
            alert("Login successful!")
            window.location.href = "index.html"
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("error code: ", errorCode, "message: ", errorMessage)
        });
}
loginForm.addEventListener("submit", handleLogin)