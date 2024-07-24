//singleTon - only constructor se banega
//Object.create//constructor methods

//object from literals

const mySym  = Symbol("key1")

const Jsuser = {
     name: "hitesh",
     "ename" :"Shiv", //iss value for kbhi bhi dot se access nhi kar skte issliye we will use the second form(Square notation)
     //mySym:"myKey1",//yeh symbol ki trah use nhi hoga
     [mySym]:"myKey1",//yeh correct syntax hai
     age:18,
     Location:"Gwalior",
     email:"123@gmail.com",
     isloggedin : false
}


//access object
// console.log(Jsuser.email)
// console.log(Jsuser["email"]) //standard form
// console.log(Jsuser["ename"])
// console.log(Jsuser[mySym]) 

Jsuser.email ="hitesh@123.com" //overwrittation

//values ko lock karne ke liye
//Object.freeze(Jsuser)
Jsuser.email = "consol@gmail.com"
// console.log(Jsuser) //isme update value nhi ayegi


Jsuser.greetings  = function(){
     console.log("hello world")
}

//console.log(Jsuser.greetings); //undefined ayega
//console.log(Jsuser.greetings()); //undefined ayega
//console.log(Jsuser.greetings); //function return krega

Jsuser.greetingsTwo  = function(){
     console.log(`Hello Js user,${this.name}`) //object mai se refrence lene ke liye
}

console.log(Jsuser.greetings());
console.log(Jsuser.greetingsTwo());








