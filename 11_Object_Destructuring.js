console.log("__________Object Destructureing________");

let obj = {
  "id" : 1,
  "name": "Vraj",
  "eno" : 36,
  "profession":"Computer Engineer"
}

let {id,name:n} = obj;

console.log(id);
console.log(n);