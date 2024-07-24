//create promis
const promiseOne = new Promise(function(resolve,reject){
           //Do and async task
           //DB calls,crptography,network call
           setTimeout(function(){
            console.log('Async task is complete')
            resolve() //connect karne ke liye then se
           },1000)
})

//consumption of promise
promiseOne.then(function(){
    console.log("Promise consumed");
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})


//data promise
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"chai",email:"chai@chai.com"})
    },1000)
})


//data comsumption
promiseThree.then(function(user){
     console.log(user)
})


const promiseFour = new Promise(function(resolve,reject){
setTimeout(function(){
let error = false
    if(!error){
        resolve({username:"Shiv",password:"65789"})
    }else{
        reject('ERROR-404 : SOMETHING WENT WRONG')
    }
    },1000)
})



//we cant store this in a variable because it will give use an erro when we want to return the username so for that we will use this chaining pattern
promiseFour
.then((user)=>{
       console.log(user);
       return user.username
  })
.then(function(username){
    //yeh joh uper username return kiya hai use return kardega
    console.log(username)
  })
.catch(function(error){
    //this is important for error handling
    console.log(error)
  })
.finally(()=>console.log("The promise is either resolved or rejected"))



const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(function(){
        let error = true
            if(!error){
                resolve({username:"JAVASCRIPT",password:"65789"})
            }else{
                reject('ERROR-404 : JS WENT WRONG')
            }
            },1000)
})


//second  approach

async function consumePromisefive(){
    try {
    const Response = await promiseFive
    console.log(Response);
    } catch (error) {
        console.log(error)
    }
}

consumePromisefive()


//  async function getAllUsers(){
//         try {
//             const response = await fetch('https://jsonplaceholder.typicode.com/users')
    
//             const data = await response.json()
//             console.log(data);
//         } catch (error) {
//             console.log("E: ", error);
//         }
//     }

//     getAllUsers()


fetch('https://api.github.com/users/hiteshchoudhary').
then((Response)=>{
    return Response.json()
})
.then((data)=>{
     console.log(data);
})
.catch((error)=>{
    console.log("E",error)
})


//promis.all
//yes this is also available,kuch reading app bhi karo