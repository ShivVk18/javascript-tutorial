const user = "shiv"

if (user) {
    console.log("MIL GYA")
}else{
    console.log("Nhi mila");
}


//falsy values

// false,0,-0,BigInt 0n," ",null,undefined,NaN


// all truee value except these values


//truthy values
//"0 "


const userlog = [] 

if(userlog.length === 0){
    console.log("array is empty");
}


const op = {

}

if(Object.keys(op).length ===0){
    console.log("op is empty")
}


//Nullish Coalescing  Operator (??) : null, undefined


let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10

val1 = null?? 10 ??20 //isme 10 hi announce hogi pehli value after null

console.log(val1)



//Terniary Operator

// condition ? true:false

const iceTeaPrice = 100

iceTeaPrice >= 80 ?console.log("more than 80") : console.log("less  than 80")