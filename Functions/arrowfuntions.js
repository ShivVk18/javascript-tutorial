const user = {
    username : "Hitesh",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`);
        console.log(this)
    }
    

}


// user.welcomeMessage()
// user.username ="sam"
// user.welcomeMessage() //this keyword se

// console.log(this)

// function chai(){

//     let username ="Hitesh"
//     // console.log(this)
//     console.log(this.username) //
// }


//arrow funtion
const chai = () =>{
    let username ="Hitesh"
    // console.log(this)
    console.log(this) //
}


// chai()

//arrow funtion
// const two = (num1,num2) => {

//     return(num1+num2)
// }

// console.log(two(7,3))

//implicit return
// const two = (num1,num2) => num1 + num2
// const two = (num1,num2) => (num1 + num2)

const two = (num1,num2) => ({id:1})  // object parenthesis ke andar return hoga


console.log(two(3,7))


// const array = [2,233,2323,55,44]


// array.forEach (()=>())



