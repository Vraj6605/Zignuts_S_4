console.log("Objects");

let obj = { 
  "Data1" : "Hello",
  "Data2" : "Makwana"
};

console.log(obj);

console.log(obj.Data1.Data2);

let a = new Object();
a.id = 1;
a.name = "Vraj";
a.Profession = "Software Engineer";
a.salary = "60,00,000";

// console.log(Object.keys(a));
console.log(Object.assign({} /* target Element*/ ,a /* Source 1 */,obj /* Source 2 */));
console.log(a);

console.log(Object.entries(a));

console.log(Object.freeze(a));
a.id = "45";
console.log(a);





// Object De - structuring
