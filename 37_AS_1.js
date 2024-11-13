/*
  Task1:
  Need to create JavaScript functions for a sum of numbers in the string (Example like“foo8bar8cat2tc2”)
*/

let text = "foo8bar83at2tc2";

let textArr = text.split("");
let sum = 0;

for(let i = 0 ; i < textArr.length ;i++){
  if(isNaN(textArr[i])){
    continue;
  }else{
    sum = sum + Number(textArr[i]);
  }
}

console.log("Sum of Number in String is "+sum);




