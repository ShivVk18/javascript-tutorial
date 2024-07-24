//for of

// ["", "", ""]
// [{},{},{}]


const myArray = [1,2,3,4,5]

for (const val of myArray) {
    // console.log(val);
}


const greetings = "Hello World"

for (const greet of greetings) {
    if(greet ==" "){
        continue
    }
    // console.log(`Each Char is ${greet}`);
}


const map = new Map()

map.set("IN","India")
map.set("USA","United States Of America")
map.set("Fr","France")


// console.log(map);

//here if we put for loopof to iterate the map we are geeting the value of map in array form 
for (const key of map) {
    // console.log(key);
}


//to destructure the array
for (const [key,value] of map) {
    // console.log(key, '-:' , value);
}