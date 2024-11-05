console.log("Map in Javascript");

let arr = [1,2,3,4,5];

let newArr = arr.map((e) => e + 3);
console.log(newArr);


console.log("-----------------");

// Chainning in Javascript

let arr2 = [4,5,6,7,8,9];

let newArr2 = arr2.map((e) => e + 2).map( (e) => e + 3).filter((e) => e > 13);
console.log(newArr2);

