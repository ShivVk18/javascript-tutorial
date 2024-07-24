//objects by single or using constructor
//cons tinderUser = new Object{}

const tinderUser = {

}

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.loggedIn = false

//console.log(tinderUser);

//nested object
const regularUser ={
    email : "Shiv@gamil.com",
    Fullname: {
           UserFn :{
            firstName :"Hitesh",
            lastname :"chaudhary"
           }
    }

}

//console.log(regularUser.Fullname.UserFn) //access karna nested objects ko

const object1 ={
    1:"a",2:"b"
}

const object2 ={
    3:"c",4:"d"
}


//const object3 = {object1,object2}//isse dono object dikhenge acha nhi lgta
//good method but not best
//const object3 = Object.assign({} ,object1,object2) //isme {} yeh target hai jisme values jaari 
//best method - spread method
const object3 = {...object1,...object2}
//console.log(object3);


//  console.log(tinderUser)
//  console.log(Object.keys(tinderUser),Object.values(tinderUser))
//  console.log(Object.entries(tinderUser))

//  console.log(tinderUser.hasOwnProperty('Cricket')) // yeh btayega ki koi property hai ki nhi

 ///////////**************LECTURE -18 *************** */
 //Destructuring object

 const course ={
    courseName : "JS in Hindi",
    coursePrice: "999",
    courseInstructure:"hitesh"
 }

 
 //course.courseInstructure

 //destructuring
 const {courseInstructure :instructure} = course

 console.log(instructure);

    

   

