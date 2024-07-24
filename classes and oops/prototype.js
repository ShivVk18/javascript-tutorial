// let myName = "shiv    "

// console.log(myName.trueLength);

const myArray = ["Spiderman","batman","superman"]
 

let superPowers = {
     Spiderman:"sling",
     batman:"glider",
     superman:"x-ray",

     getSpideyPower : function(){
        console.log(`power of spider is ${this.Spiderman}`);
        return
     }
}

// console.log(superPowers.getSpideyPower());

Object.prototype.shiv = function(){
    console.log("hello")
}

// superPowers.shiv()


Array.prototype.shivansh = function(){
    console.log("goodmorning");
}

// myArray.shivansh()
// myArray.shiv()

// superPowers.shivansh() // cant access because the prototype is of array type


//inheritance
const teacher ={
    makeVideo:true
}

const Teachingsupport={
    isavailable:false,
    //inheritance symbol
    __proto__:teacher
}

//modern syntax of inheritance
Object.setPrototypeOf(Teachingsupport,teacher)


let anotherUsername = "chaiAURCODE         "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`The true length is: ${this.trim().length}`)
}


anotherUsername.trueLength()





















