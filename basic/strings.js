const name = "hiteshfg"

//another way to declare string 
const MyName = new String('Shivansh')
const RepoCount = 50

// console.log(name + RepoCount + " Value") //outdated hai isko use nhi karna

//console.log(`hello my name is ${name} and my dollar price is ${RepoCount} and ${MyName}`);


//string is store data in form of key value pair
// console.log(name[2]);
// console.log(name._proto_)

// console.log(name.toUpperCase())
//  console.log(name.charAt(4))
//  console.log(name.indexOf('s'))

//  const newString = name.substring(0,4); //last ki value include nhi hoti
//  console.log(newString)


//  const AnotherString = name.slice(-6,4);
//  console.log(AnotherString);

const NewName = "   Shiv   "
console.log(NewName)
const Anothernn = NewName.trim();
console.log(Anothernn);


const url =  "https://hitesh.com/hitesh%20chaudhary" //%20 space hai

console.log(url.replace('%20','-'));
console.log(url.includes('hitesh'));





