//ES6
 class User{
    constructor(username,email,password){
        this.username = username
        this.email = email
        this.password = password
    }


    encryptPassword(){
        return `${this.password}abc`
    }
     
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
 }

 const chai = new User("chai","chai.ccom","123")

 console.log(chai.encryptPassword());
 console.log(chai.changeUsername());


 //behind the scenes

 //Create a fucntion  
 //create a function based prototype


 