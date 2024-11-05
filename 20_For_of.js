console.log("For of Loop");

console.log("-------------");

let name = "Vraj";
for(let char of name){
  console.log(char);
}

console.log("-------------");


let arr = [12,36,45,78,25];
for(let item of arr){
  console.log(item);
}

console.log("-------------");

let myObj = {
  1 : "K",
  2 : "R"
};

for(let key in myObj){
  console.log(key , myObj[key]);
  
}

console.log("-------------");

const map = new Map();
map.set("IN" ,"India");
map.set("UK" ,"United Kingdom");
map.set("US","United State of America");
map.set("FR","France");
map.set("FR","France");

console.log(map);

//---------------- Map is not iterable---------------

map.forEach((item) => {
    console.log(item);
})


console.log("-------------");

