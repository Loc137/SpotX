import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js"
import { auth } from "./firebase-config.js"

const inpEmail = document.querySelector("#email")
const inpPwd = document.querySelector("#password")

function handleLogin(event) {
    let email = inpEmail.value.trim()
    let password = inpPwd.value.trim()

    if (!email || !password) {
        alert("Please fill all the blank!")
    }

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;

            const userSesson = {
                user: {
                    email: user.email
                },
                expiry: new Date().getTime() + 2 * 60 * 60 * 1000
            }
            localStorage.setItem("user_sesson", userSesson)
            alert("Login successful!")

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("error code: ", errorCode, "error message: ", errorMessage)
            alert("Email or password is incorrect!")
        });
}
document.querySelector("#btn_login").addEventListener("click", handleLogin)