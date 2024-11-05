
/*
 What is typeCasting ? --> Type Casting is the process of convert one datatype to other datatype.
 ig. String convert into Number
*/

let score = "22";
console.log(typeof score);  //--> Give me String
// But I want In the form of Number so here We use Type Casting In Js

let stringToNumber = Number(score);
console.log(typeof stringToNumber); // --> yeah,It will Give Me Number as Datatype.😁

let NumberToString = String(stringToNumber);
console.log(typeof NumberToString); // --> String

let a = "12abc";
let stringToNumberCon = Number(a);
console.log(stringToNumberCon);  // --> NaN(Not a Number)

let b = null;
let stringToNumberConv = Number(b);
console.log(stringToNumberConv); // --> 0

let bool = true;
let newBool = Number(bool);
console.log(newBool); // --> 1

let bool2 = false;
let newBool2 = Number(bool);
console.log(newBool2); // --> 0


/* 

    ------------------
    |data ==> Boolean|
    |----------------|
    |  1  ==> true   |
    |  0  ==> false  | 
    |  "" ==> false  |
    | "h" ==> true   |
    ------------------

*/
