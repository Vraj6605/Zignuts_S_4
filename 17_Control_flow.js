console.log(" "); 
console.log("___Control Flow___");
console.log(" "); 

// ------------------------------

// const isUserLoggedIn = true;

// if(isUserLoggedIn){
//   console.log("User Login");
// }

// ------------------------------

// let hasAccount = true;

// if(hasAccount){
//   console.log("You Can Login.");
// }else{
//   console.log("You must register yourself first.");
// }

// ------------------------------

let no = new Date().getDay();

switch(no){
  case 0:
    console.log("Today is Sunday!");
    break;
  case 1: 
    console.log("Today is Monday!");
    break;
  case 2:
    console.log("Today is Tuesday!");
    break;
  case 3:
    console.log("Today is Wednsday!");
    break;
  case 4:
    console.log("Today is Thursday!");
    break;
  case 5:
    console.log("Today is Friday!");
    break;
  case 6:
    console.log("Today is Saturday!");
    break;
}

// ------------------------------------------

// How to check that Object is empty or not.

// let obj = {
//   name : "Vraj"
// };

let obj = {};

if(Object.keys(obj).length == 0){
  console.log("Your Object is Empty.");
}else{
  console.log("Object is Not Empty.")
}

// or 

Object.keys(obj).length == 0 ? console.log("Your Object is Empty.") : console.log("Object is Not Empty.");



