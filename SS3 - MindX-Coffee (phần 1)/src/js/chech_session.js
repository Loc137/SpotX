function check_session(){
    let userSession = JSON.parse(localStorage.getItem("user-session"))

    if (userSession){
        const now = new Date().getTime()
        if (now > userSession.expiry){
            localStorage.removeItem("user-session")
            window.location.href = "./login.html"
        } else {
            console.log("Phiên còn hạn!")
        }
    } else {
        window.location.href = "./login.html"
    }
}
check_session();