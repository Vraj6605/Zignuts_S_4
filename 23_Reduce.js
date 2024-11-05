console.log("Reduce Method in javaScript");

let arr = [12,36,78,96,12,36];

let initialValue = 0 ; 
let amount = arr.reduce((acculator,currentValue) => acculator + currentValue, 0);

console.log("Total Amount :- ",amount);
