class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }

    addCourse(){
       console.log(`New course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai","chai.com","123")
chai.addCourse()

const tea = new User("shiv")
tea.logMe()


console.log(chai instanceof User);