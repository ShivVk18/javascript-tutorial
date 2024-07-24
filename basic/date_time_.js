//DATES

// let MyDate  = new Date()

// console.log(MyDate.toString())
// console.log(MyDate.toDateString())
// console.log(MyDate.toISOString())
// console.log(MyDate.toJSON())
// console.log(MyDate.toLocaleString())


// console.log(typeof MyDate)

// let MyNewDate  = new Date(2025,0,23) // month start from 0 in js
// let MyNewDate  = new Date(2025,0,23,5,3) // month start from 0 in js
// let MyNewDate  = new Date(2025-01-13) // month start from 0 in js
// let MyNewDate  = new Date("01-23-2025") // month start from 0 in js

// // console.log(MyNewDate.toLocaleString())

// // TIMESTAMPS
// let MytimeStamps  = Date.now()
// //   yeh comparison ke liye
// // console.log(MytimeStamps) //milisecond value ayegi
// // console.log(MyNewDate.getTime())

// console.log(Math.floor(Date.now()/1000))//issliye jisse decimal value nhi aye uski floor value aye


let newDate = new Date()

// console.log(newDate.getMonth())//ese hi sab hojata methods ke through


//'${newDate.getDay()}  and the time


//customization of local string format
newDate.toLocaleString('default',{
   weekday:"long"
})
