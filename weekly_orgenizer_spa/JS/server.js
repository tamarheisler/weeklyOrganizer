//manages the meetsApp

//=========================================================
// accepts a url and item and sends to the right function 
//=========================================================
function serverCall(method, item) {
    switch (method) {
        case "getCurrentUser":
            return getCurrentUser();
        case "signUp":
            return signUp(item);
        case "logIn":
            return logIn(item);
        case "logOut":
            return logOut(item);
        case "getDay":
            return getDay(item);
        case "getAll":
            return GetAll();
        case "Post":
            return Post(item);
        case "DeleteDay":
            return deleteDay(item);
        case "DeleteMeet":
            return DeleteMeet(item);
        case "Put":
            return Put(item);
    }
}