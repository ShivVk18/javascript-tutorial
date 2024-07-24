//Object literal 

// const user = {
//       username:"Shiv",
//       favCricketer:"Virat Kohli",
//       age:"18",

//       allDetails: function(){
//         return `${this.username},${this.favCricketer},${this.age}`
//       }
// }


// console.log(user.allDetails());

//constuctor function
function User(username, loginCount, Isloggedin){
    this.username = username
    this.loginCount = loginCount
    this.Isloggedin = Isloggedin

    return this  // if we do not return this then also it will give the value because this return is implicitly defined 
}

const UserOne  = new User("Shiv",10,false)
const UserTwo  = new User("Shivansh",9,true)

console.log(UserOne);
console.log(UserTwo);