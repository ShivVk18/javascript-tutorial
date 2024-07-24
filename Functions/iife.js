//IMMEDIATELY INVOKED FUNCTION EXPRESSION

//named iife
(function chai(){
    console.log(`Db connected`)
})();



//simple iffe
( (name)=>{
    console.log(`DB CONNECTED 2 ${name}`)
})('Hitesh')