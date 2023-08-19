let container = document.getElementById('container')

toggle = () => {
	container.classList.toggle('sign-in')
	container.classList.toggle('sign-up')
}

setTimeout(() => {
	container.classList.add('sign-in')
}, 200)

const Username = getElementById("inputUserName");
const Useremail = getElementById("inputUserEmail");
const Userpassword = getElementById("inputUserPassword");

// localStorage.setItem(" ", " ");

// document.getElementById("inputUserName").innerHTML = localStorage.getItem("UserName");
// document.getElementById("inputUserEmail").innerHTML = localStorage.getItem("UserEmail");
// document.getElementById("inputUserPassword").innerHTML = localStorage.getItem("UserPassword");

// storeInLocalStorage();

// function storeInLocalStorage(){   //stores items in the localStorage
//     let name = document.getElementById("inputUserName").innerHTML;
//     let Email = document.getElementById("inputUserEmail").innerHTML;
//     let password = document.getElementById("inputUserPassword").innerHTML; //gets the key from the user

//     const myUser = {
//         name: name,
//         Email: Email,
//     }

//     window.localStorage.setItem(key,JSON.stringify(car));  
//     //converting object to string
// }
