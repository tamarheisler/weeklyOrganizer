window.addEventListener("load", function () {
    document.getElementById("myForm").addEventListener("submit", register)
})

//==================================
// function registration
//==================================
function register() {

    let user = {
        userName: document.getElementById("userName").value,
        userPassword: document.getElementById("userPassword").value,
        userMail: document.getElementById("userMail").value,
    }
    let mail = document.getElementById("userMail").value;
    let users = JSON.parse(localStorage.getItem(mail));
    if (users == null) {
        window.localStorage.setItem(mail, JSON.stringify(user))
        window.localStorage.setItem("thisUser", JSON.stringify(user))
        document.getElementById("myForm").setAttribute("action", "../HTML/main.html")

    }
    else {
        if (users.userName == user.userName && users.userPassword == user.userPassword) {
            window.localStorage.setItem("thisUser", JSON.stringify(users))
            window.location.replace("../HTML/game.html");
            document.getElementById("myForm").setAttribute("action", "../HTML/game.html")


        }
        else
            alert("email adress is already assigned");
        go();

    }
}

//==================================
// function account maker
//==================================
function go() {
    document.getElementById("myForm").addEventListener("submit", register)

}
