// let a = 10
// const b = 20
var c = 30


let a =300

//when we use scope in browser then its different from code enviroment(node)
// console.log(a)
// console.log(b)
// console.log(c)

//scope
// {
//     let a=10
//     const b= 20
//     console.log("INNER: ",a)
// }

// console.log(a)


//nested scope

function one(){
    const username ="Shiv"

    function two(){
         const website = "youtube"
         console.log(username)
    }

    //console.log(website)//error ayega website is not defined

    two()
}

one()




//*****************************************INTERESTING******************************************** */

//concept of hoisting


console.log(Addone(6))//this will also run properly
function Addone(num){
       return num+1
}



//AddTwo(6)//this will give us the error
const AddTwo = function(num){
    return num+2
}

AddTwo(6)//this will run properly






