import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js"; 
import {auth, db} from './firebase-config.js'



//la
const inpUsername=document.querySelector(".inp-username");
const inpEmail = document.querySelector(".inp-email");
const inpPwd = document.querySelector(".inp-pwd");
const inpConfirmPwd = document.querySelector(".inp-cf-pw");
const registerForm =document.querySelector("#register-form");


async function handleRegister(event){
    event.preventDefault(); // ngan ko cho form reload

    let username=inpUsername.value.trim();
    let email=inpEmail.value.trim();
    let password=inpPwd.value;
    let confirmPassword=inpConfirmPwd.value;

    let role_id= 2 //guest=2, admin =1


    //kiem tra rong
    if (!username || !email || !password || !confirmPassword){
        alert("Vui long dien du cac truong")
        return
    }
    if (password!==confirmPassword) {
        alert("Mat khau khong khop")
        return
    }

    try {
        const userCredential= await createUserWithEmailAndPassword(auth, email, password);
        const user=userCredential.user; //lay thong tin user vua tao

        const userData={
            username,
            email,
            role_id,
            balance: 0,
            createdAt: new Date() // thoidiem dang ky
        }
        return addDoc(collection(db, "users"),userData);
   }
    catch (error){
        console.error("Error: ",error.message)
        alert("loi"+ error.message)
    }
}
//gan su kien submit cho Form
registerForm.addEventListener('submit',handleRegister )