class User{
    constructor(email,password){
        this.email = email;
        this.password = password
    }
    
    get email(){
        return this._email.toUpperCase();
    }

    set email(value){
        this._email = value
    }
    get password(){
        return this._password.toUpperCase()
    }

    set password(value){
             this._password = value.toUpperCase() //new variable bnalo joh password set karra
    }
}

const hitesh = new User("hitesh@122.com","abc");


console.log(hitesh.email)