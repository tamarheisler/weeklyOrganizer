//================================
// logIn
//================================
function log_in() {
    let log_email = document.getElementById("userMail1").value;
    let a = new FxmlHttpRequest();
    a.open('logIn', 'serverCall');
    let requestStatus = a.send(log_email);
    if (requestStatus == 200) {
        alert("You have succesfuly loged in"); // name+ this
        app.navOpen("OpeningPage");
        return;
    }
    alert("you have to Signup");
    app.navOpen("login_and_register");
}
//================================
// signUp
//================================
function sign_up() {
    let sign_password = document.getElementById("userPassword").value;
    let sign_email = document.getElementById("userMail").value;
    let sign_name = document.getElementById("userName").value;
    let newUser = new User(sign_name, sign_email, sign_password);
    let a = new FxmlHttpRequest();
    a.open('signUp', 'serverCall');
    let requestStatus = a.send(newUser);
    if (requestStatus == 200) {
        alert("You have succesfuly loged in"); // name+ this
        app.navOpen("OpeningPage");
        return;
    }
    alert("You are exist");
    app.navOpen("OpeningPage");
}
//================================
// log out
//================================
function log_out() {
    let a = new FxmlHttpRequest();
    a.open('logOut', 'serverCall');
    a.send(null);
    alert("Your account have delited succesfuly");
}
// ==================================
// function forgot email          
// ==================================
function sendEmail() {
    let cur_email = document.getElementById("userMail1").value;
    window.open(`mailto: ${cur_email}`);
}


//================================
// open specific day page
//================================
function openDay(dayName) {
    let a = new FxmlHttpRequest();
    a.open("getCurrentUser", "serverCall");
    let currentUser = a.send();
    let displayedMeetings = [];
    currentUser.meetings.forEach(element => {
        if (element != null && element.day == dayName) {
            displayedMeetings.push(element)
        }
    });
    app.navOpen("specificDay");
    let curDayName = document.getElementById("CurDayName");
    curDayName.innerHTML = dayName;
    buildMeets(displayedMeetings);
};

//================================
// add new Meet()
//================================
function addNewMeet() {
    let newM = new Meet();
    let a = new FxmlHttpRequest();
    a.open("getCurrentUser", "serverCall");
    let currentUser = a.send();
    curDayName = document.getElementById("CurDayName").innerText;
    newM.day = curDayName;
    newM.hour = document.getElementById("new_hour").value;
    newM.subject = document.getElementById("new_sub").value;
    let b = new FxmlHttpRequest();
    b.open('Post', 'serverCall');
    b.send(newM);
    let displayedMeetings = [];
    currentUser.meetings.forEach(element => {
        if (element != null && element.day == curDayName) {
            displayedMeetings.push(element)
        }
    });
    openDay(curDayName);
}

//================================
// deleting a meet
//================================
function deleteMeet() {
    let a = new FxmlHttpRequest();
    a.open("getCurrentUser", "serverCall");
    let currentUser = a.send();
    let sub = prompt('enter the subject of the chosen meet',);
    let meet = currentUser.meetings.find(m => m != null && m.subject === sub);
    let day = meet.day;
    let b = new FxmlHttpRequest();
    b.open('DeleteMeet', 'serverCall');
    b.send(sub);
    openDay(day);
}

//================================
// deleting a day
//================================
function DeleteDay() {
    let day = prompt('which day do you want to delete?',);
    let a = new FxmlHttpRequest();
    a.open('DeleteDay', 'serverCall');
    if (a.send(day) != 200) {
        alert("ERROR in deleting")
    };
}

//================================
// update a meet
//================================
function updateMeet() {
    let a = new FxmlHttpRequest();
    a.open("getCurrentUser", "serverCall");
    let currentUser = a.send();
    let sub = prompt('enter the subject of the chosen meet',);
    let change = prompt('enter the new hour for the chosen meet',);
    let b = new FxmlHttpRequest();
    let newM = new Meet();
    newM.subject = sub;
    newM.hour = change;
    let meet = currentUser.meetings.find(item => item != null && item.subject == sub);
    let day = meet.day;
    b.open('Put', 'serverCall');
    if (b.send(newM) != 200) {
        alert("ERROR in updating")
    };
    b.send(newM);
    openDay(day);
}

//================================
// get all data
//================================

function getAllData() {
    let a = new FxmlHttpRequest();
    let respArr = [];
    app.navOpen("selectedDay");
    a.open('getAll', 'serverCall');
    respArr = a.send();
    if (respArr.length == 0) {
        alert("no data was found");
        return;
    }
    buildSelectedMeets(respArr);
}

//================================
// get data for a specific day
//================================

function getdataOfAspecific() {
    let day = prompt("Which day do you want to get data about?",);
    app.navOpen("selectedDay");
    let respArr = [];
    let a = new FxmlHttpRequest();
    a.open('getDay', 'serverCall');
    if (a.send(day) == []) {
        alert("no data was found");
    };
    respArr = a.send(day);
    if (respArr.length == 0) {
        alert("you dont have meetings for this day");
        return;
    }
    buildSelectedMeets(respArr);
}

//================================
// Create meetings on the screen
//================================
function buildMeets(arrayOfMeetings) {
    let bodyMeetings = document.getElementById("containerAllTheMeetings");
    bodyMeetings.innerHTML = null;
    arrayOfMeetings.forEach(item => {
        if (item != null) {
            let MeetingDiv = document.createElement("div");
            MeetingDiv.classList = "divMeetings"
            bodyMeetings.appendChild(MeetingDiv);
            let descHtml = document.createElement("p");
            let titleHtml = document.createElement("h3");
            let dateHtml = document.createElement("h3");
            MeetingDiv.appendChild(descHtml);
            MeetingDiv.appendChild(titleHtml);
            MeetingDiv.appendChild(dateHtml);
            titleHtml.innerHTML = "subject:  " + item.subject;
            dateHtml.innerHTML = "hour:  " + item.hour;
            descHtml.innerHTML = "you have a new meet:";
        }
    }
    )
}


//================================
// Create selected meetings on the screen
//================================
function buildSelectedMeets(arrayOfMeetings) {
    let bodyMeetings = document.getElementById("containerOfASelectedDay");
    bodyMeetings.innerHTML = null;
    arrayOfMeetings.forEach(item => {
        if (item != null) {
            let MeetingDiv = document.createElement("div");
            MeetingDiv.classList = "divMeetings"
            bodyMeetings.appendChild(MeetingDiv);
            let descHtml = document.createElement("p");
            let titleHtml = document.createElement("h3");
            let dateHtml = document.createElement("h3");
            MeetingDiv.appendChild(descHtml);
            MeetingDiv.appendChild(titleHtml);
            MeetingDiv.appendChild(dateHtml);
            titleHtml.innerHTML = "subject:  " + item.subject;
            dateHtml.innerHTML = "hour:  " + item.hour;
            descHtml.innerHTML = "you have a new meet:";
        }
    }
    )
}

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