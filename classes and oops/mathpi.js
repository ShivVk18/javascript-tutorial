//it tells us about the hidden property of an object
const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")

// console.log(descriptor);

const chai ={
    name:"gingerchai",
    price:250,
    isAvailable:true,
    orderchai : function(){
          console.log("chai is ordered");
    }
}


console.log(chai);



// console.log(Object.getOwnPropertyDescriptor(chai,"name"));

// Object.defineProperty(chai,'name',{
//     writable:false,
//     enumerable:false
// })

// console.log(Object.getOwnPropertyDescriptor(chai,"name"));

//for iteration on object
for (let [key,value] of Object.entries(chai)) {

    if(typeof value !== 'function'){
    console.log(`${key} : ${value}`);}
}




