/*
  Task2:
  Need to createa Javascript function for the sum of string (Example like "1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8,9, 10.9")
*/

let data =  "1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9";

let dataArr = data.split(", ");

let sum = 0 ;
dataArr.forEach((item) => {
  sum = sum + parseFloat(item);
})

console.log(sum);
