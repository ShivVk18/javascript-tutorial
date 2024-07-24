//... = rest operator = this allows a function to accept n number of arguments as an array
function calculateCartPrice(val1,val2,...num1){
    return num1
    
}

//console.log(calculateCartPrice(2,400,500,2000));  //value 1 and value 2 val1 and val 2 ko assignn ho gyi

//object in function
const user = {
    username:"hitesh",
    id:2
}

function handleObject(anyobject){
   //console.log(`Username is ${anyobject.username} and the id is ${anyobject.id}`);
}


handleObject(user)//for checking


//in array 

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))


