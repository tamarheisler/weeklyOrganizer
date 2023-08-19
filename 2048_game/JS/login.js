window.addEventListener("load", function () {
    document.getElementById("form").addEventListener("submit", login)
})

//==================================
// function log in
//==================================
function login() {
    var user = {

        userPassword: document.getElementById("userPassword").value,
        userMail: document.getElementById("userMail").value,
        userLevel: 0
    }

    var mail = document.getElementById("userMail").value;

    var users = JSON.parse(localStorage.getItem(mail));
    if (users == null) {
        alert("email adress not found");
    }
    else {
        if (users.userPassword == user.userPassword) {
            window.localStorage.setItem("thisUser", JSON.stringify(users))
            document.getElementById("form").setAttribute("action", "../HTML/game.html")

        }
        else {
            alert("password or email are invalid");

        }
    }

}

