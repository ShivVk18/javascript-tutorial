const myArray = ["Virat" , "Rohit" ,"Dhoni"]


myArray.forEach((item,index)=> {
        // console.log(`the item is ${item} and its index is ${index}`);
})




const  OArray = [
    {
        languageName : "Javascript",
        languagefileName : "Js"
    },
   {
    languageName : "C++",
        languagefileName : "cpp"
   },
   {
    languageName : "Python",
        languagefileName : "py"
   }
  ]


OArray.forEach(index=>{
    console.log(`the language name is ${index.languageName} and there file name is ${index.languagefileName}`);
})