import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";
import { auth, db } from "./firebase-config.js";

//lay gia tri input
const inpUsername = document.querySelector(".inp-username")
const inpEmail = document.querySelector(".inp-email")
const inpPwd = document.querySelector(".inp-pwd")
const inpConfirmPwd = document.querySelector(".inp-cf-pw")
const registerForm = document.querySelector("#register-form")

async function handleRegister(event) {
    event.preventDefault() //ngan ko cho form reload

    let username = inpUsername.value.trim()
    let email = inpEmail.value.trim()
    let password = inpPwd.value.trim()
    let confirmPassword = inpConfirmPwd.value.trim()

    let role_id = 2 //guest = 2, admin = 1

    if (!username || !email || !password || !confirmPassword) {
        alert("Please fill the blank!")
        return
    }
    if (password !== confirmPassword) {
        alert("Password is incorrect!")
    }

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        const user = userCredential.user // lay thong tin user vua tao

        const userData = {
            username,
            email,
            role_id,
            balance: 0,
            createAt: new Date() // thoi diem dang ky
        }
        await setDoc(doc(db, "users", user.uid), userData)
        alert("Register successful!")
        registerForm.reset()
    } catch (error) {
        // console.error("Error: ", error.message)
        alert("loi", error.message)
    }
}

// gan event submit cho form

registerForm.addEventListener("submit", handleRegister)


