 

window.localStorage.setItem('users' , JSON.stringify([]));

class User{
    constructor(name, email, password, meetings) {
        this.name=name;
        this.email=email;
        this.password=password;
        this.meetings= meetings || [];
    };
}

class Meet{
    constructor(day, subject, hour) {
        this.day=day;
        this.subject=subject;
        this.hour=hour;
    };
}
