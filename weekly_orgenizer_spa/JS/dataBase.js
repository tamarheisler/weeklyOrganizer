// let users = JSON.parse(localStorage.getItem("Users")) || [];
// let currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
//==================================
// get current user function
//==================================
function getCurrentUser() {
    let currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
    return currentUser;
}

//==================================
// Sign up function
//==================================
function signUp(user) {
    let users = JSON.parse(localStorage.getItem("Users")) || [];
    let find = users.find(item => item == user);
    if (find) {
        return 403; // random status new user found in a user
    }
    users.push(user);
    localStorage.setItem("Users", JSON.stringify(users))
    window.sessionStorage.setItem("currentUser", JSON.stringify(user));
    return 200;
}
//==================================
//  log in function
//==================================
function logIn(email) {
    let users = JSON.parse(localStorage.getItem("Users")) || [];
    let find = users.find(item => item.email == email);
    if (find) {
        window.sessionStorage.setItem("currentUser", JSON.stringify(find));
        return 200;
    }
    return 404;
}
//==================================
//  log out function
//==================================
function logOut() {
    let users = JSON.parse(localStorage.getItem("Users")) || [];
    let permission = confirm("Are you sure?");
    if (permission) {
        sessionStorage.clear();
        app.navOpen("login_and_register");
    }
}
//==================================
// functions GET
//==================================
function getDay(day) {
    let responseArr = [];
    let currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
    currentUser.meetings.forEach(element => {
        if (element.day == day) {
            responseArr.push(element);
        }
        // responseArr.push(element => element.day == day);
    });
    // if (responseArr == []) {
    //     alert("you dont have data");
    // }
    return responseArr;
    if (responseArr == []) { return 404 };

    return 200;
}

//function g( day = null ) {}

function GetAll() {
    let responseArr = [];
    let currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
    responseArr = currentUser.meetings;
    return responseArr || [];
}

//==================================
// function POST (Add)
//==================================
function Post(meet) {
    currentUser.meetings.push(meet);
    sessionStorage.setItem("currentUser", JSON.stringify(currentUser));
    let find1 = users.findIndex(searched => searched.email == currentUser.email);
    users[find1] = currentUser;
    localStorage.setItem("Users", JSON.stringify(users));
}

//==================================
// functions DELETE
//==================================
function deleteDay(day) {
    currentUser.meetings.splice(users.findIndex(temp => { temp.day == day }), 1);
    if (!find) {
        return 404;
    }
    return 200;
}
function DeleteMeet(subjectOfMeet) {
    let itemToDelete = -1;
    itemToDelete = currentUser.meetings.findIndex(searched => searched != null && searched.subject == subjectOfMeet);
    if (itemToDelete == -1) {
        return 404;
    }
    delete currentUser.meetings[itemToDelete];
    sessionStorage.setItem("currentUser", JSON.stringify(currentUser));
    let find1 = users.findIndex(searched => searched.email == currentUser.email);
    users[find1] = currentUser;
    localStorage.setItem("Users", JSON.stringify(users));
    return 200;
}
//==================================
// function PUT (Update)
//==================================
function Put(newMeet) {
    let itemToUpdate = -1;
    itemToUpdate = currentUser.meetings.findIndex(searched => searched != null && searched.subject == newMeet.subject);
    if (itemToUpdate == -1) {
        return 404;
    }
    currentUser.meetings[itemToUpdate].hour = newMeet.hour;
    sessionStorage.setItem("currentUser", JSON.stringify(currentUser));
    let find1 = users.findIndex(searched => searched.email == currentUser.email);
    users[find1] = currentUser;
    localStorage.setItem("Users", JSON.stringify(users));
    return 200;
}
