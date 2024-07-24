//for 
// const myArray = [0,23,44,55,66]
// for (let index = 0; index < myArray.length; index++) {
//      console.log(`length of myArray is ${index} and the value is ${myArray[index]}`)
// }

// for (let index = 0; index <= 10; index++) {
//     const element = index;
//     console.log(element)
    
// }


for (let i = 1; i <= 10; i++) {
    //console.log(`Outer loop : ${i}`)
    for (let j = 1; j <= 10; j++) {
        //console.log(`Inner loop : ${j} and inner loop ${i}`)
        //console.log(i + '*' + j + ' = ' + i*j)
    }
    
}


//break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index==5) {
//         console.log("Detected 5")
//         break
//     }
//     console.log(`value of i is ${index}`)
    
// }

for (let index = 1; index <= 20; index++) {
    if (index==5) {
        console.log("Detected 5")
        continue
    }
    console.log(`value of i is ${index}`)
    
}




