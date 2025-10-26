import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";
import { auth, db } from "./firebase-config.js";

const inpUsername = document.querySelector("#username")
const inpEmail = document.querySelector("#email")
const inpPwd = document.querySelector("#password")
const inpConfirmPwd = document.querySelector("#confirm_password")

function handleRegister(event) {
    let username = inpUsername.value.trim()
    let email = inpEmail.value.trim()
    let password = inpPwd.value.trim()
    let Confirm_password = inpConfirmPwd.value.trim()

    let email_regex = /@/;;

    if (!username || !email || !password || !Confirm_password) {
        alert("Please fill all the blank!")
    }

    if (!email_regex.test(email)) {
        alert("Email must contain the '@' character!")
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters!")
    }

    if (password !== Confirm_password) {
        alert("Confirm password is incorrect!")
    }


    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            
            const userData = {
                username,
                email,
                password,
                Confirm_password
            }
            addDoc(collection(db, "users"), userData)
            alert("Register successful!")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("error code: ", errorCode, "error message: ", errorMessage)
            alert("This account is already exists!")
        });
}
document.querySelector("#btn_register").addEventListener("click", handleRegister)