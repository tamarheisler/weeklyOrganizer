//=====================================
// design of the sign in & log in.
//=====================================
const signUpButton = document.getElementById('signUpDes');
const signInButton = document.getElementById('signInDes');
const container = document.getElementById('container');
signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});
signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});
//==================================
// function log in - old user 
//==================================
function signIn() {
    //event.preventDefault;
    let cur_password = document.getElementById("userPassword1").value;
    let cur_email = document.getElementById("userMail1").value;
    let users = JSON.parse(localStorage.getItem("Users")) || [];
    let ifExists = users.find(person => person.email == cur_email && person.password == cur_password);
    if (cur_password == '' || cur_email == '') {
        alert("please complete all the lines!");
        app.nav("login_and_register");
    }
    if (ifExists != null) {
        let cur_name = ifExists.name;
        debugger
        let cur_meetings = ifExists.meetings;
        // window.localStorage.setItem("currentUser", JSON.stringify(ifExistes));
        // currentUser = localStorage.getItem("currentUser");
        window.sessionStorage.setItem("currentUser", JSON.stringify(ifExists));
        let currentUser = sessionStorage.getItem("currentUser");
        currentUser = JSON.parse(currentUser);
        app.navOpen("OpeningPage");
    }
    else {
        alert("you have to sign up");
    };
}

//==================================
// function registration = new 
//==================================
function signUp() {
    event.preventDefault();
    let cur_password = document.getElementById("userPassword").value;
    let cur_email = document.getElementById("userMail").value;
    let cur_name = document.getElementById("userName").value;
    let user = new User(cur_name, cur_email, cur_password);
    // let user = {
    //     "userName": document.getElementById("userName").value,
    //     "userPassword": document.getElementById("userPassword").value,
    //     "userMail": document.getElementById("userMail").value,
    // }
    if (cur_password == '' || cur_email == '' || cur_name == '') {
        alert("please complete all the lines!");
        app.nav("login_and_register");
    }
    let users = JSON.parse(localStorage.getItem("Users")) || [];
    let find = users.find(temp => { temp.email == user.userMail });
    if (!find) {
        app.navOpen("OpeningPage");
        users.push(user)
        localStorage.setItem("Users", JSON.stringify(users))
        window.sessionStorage.setItem("currentUser", JSON.stringify(find));
        currentUser = sessionStorage.getItem("currentUser");
        // window.localStorage.setItem("currentUser", JSON.stringify(user))
        // currentUser = localStorage.getItem("currentUser");
    }
    else {
        alert("you're already exists")
        app.navOpen("OpeningPage");
    }
}

//==================================
// function log out                     
//==================================

function logOut() {
    let users = JSON.parse(localStorage.getItem("Users")) || [];
    let find = users.find(temp => { temp.userMail == currentUser.userMail });
    let permission = confirm("Are you sure?");
    if (permission) {
        sessionStorage.clear();
        localStorage.removeItem(find);
        app.navOpen("login_and_register");
    }

}

// ==================================
// function forgot email          
// ==================================
function sendEmail() {
    let cur_email = document.getElementById("userMail1").value;
    window.open(`mailto: ${cur_email}`);
}





//==================================
// // vv function log in - old user 
// //==================================
// function signIn() {
//     let cur_password = document.getElementById("userPassword1").value;
//     let cur_email = document.getElementById("userMail1").value;
//     if (cur_password == '' || cur_email == '') {
//         alert("please complete all the lines!");
//         app.nav("login_and_register");
//     }
//     let ifExists = users.find(person => person.email == cur_email && person.password == cur_password);
//     if (ifExists != null) { // it is user in this name
//         let cur_name = ifExists.name;
//         let cur_meetings = ifExists.meetings || [];
//         let curentUser = new User(cur_name, cur_email, cur_password, cur_meetings)
//         app.navOpen("OpeningPage");
//     }
//     else {
//         alert("you have to sign up");
//     };
// }

// //==================================
// // vv function registration = new 
// //==================================
// function signUp() {
//     event.preventDefault();
//     let cur_password = document.getElementById("userPassword").value;
//     let cur_email = document.getElementById("userMail").value;
//     let cur_name = document.getElementById("userName").value;
//     let user = new User(cur_name, cur_email, cur_password, []);
//     if (cur_password == '' || cur_email == '' || cur_name == '') {
//         alert("please complete all the lines!");
//         app.nav("login_and_register");
//     }
//     let find = users.find(temp => { temp.email == user.userMail });
//     if (!find) {
//         app.navOpen("OpeningPage");
//         users.push(user);
//         localStorage.setItem("Users", JSON.stringify(users))
//         let currentUser = new User;
//         currentUser = user;
//     }
//     else {
//         let currentUser = new User;
//         currentUser = find;
//         alert("you're already exists")
//         app.navOpen("OpeningPage");
//     }
// }