console.log("Dates and Time");

let myDate = new Date();
// console.log(myDate);  // --> 2024-11-02T08:55:23.671Z
// console.log(myDate.toString());  // --> Sat Nov 02 2024 14:25:59 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString());  // --> Sat Nov 02 2024
// console.log(myDate.toTimeString()); // --> 14:27:05 GMT+0530 (India Standard Time)
// console.log(myDate.toLocaleDateString());  // --> 2/11/2024
// console.log(myDate.toLocaleTimeString());  // --> 2:28:26 pm
// console.log(typeof myDate);  // --> Object


// Date Creation

// let myCreatedDate = new Date(2023,0,21,14,20);
// let newDate = new Date("2023-01-12");
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toTimeString());
// console.log(myCreatedDate.toLocaleString());
// console.log(newDate.toDateString());
// console.log(newDate.getTime());  //return ms Value
 



let myTimeStemp = Date.now();
console.log("My TimeStamp : " + myTimeStemp);
console.log(Math.floor(myTimeStemp /1000));  // in Second







