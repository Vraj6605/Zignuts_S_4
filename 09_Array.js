console.log("----------Array---- ");

let arr = [0,1,2,3,4,5,6];
// console.log(arr[0]);

// let arr2 = new Array(4,5,3,2,9,8,7);
// console.log(arr2);

// Array Methods 

// console.log(arr.push(23));
// console.log(arr.length);


let MyArr = [11,2,3];

// let data = MyArr.map((e) => {return e + 1})
// console.log(data);
// console.log(MyArr);
  
// console.log(MyArr.join());
// console.log(typeof MyArr.join());

// MyArr.unshift(23,45,6,7,8)
// console.log(MyArr);
// MyArr.shift()
// console.log(MyArr);



// Slice
// console.log(MyArr);
// console.log(MyArr.slice(0,2));
// console.log(MyArr);
// console.log(MyArr.splice(0,4,45,66,76));
// console.log(MyArr);



// MyArr.push([4,3,6]);
console.log(MyArr);

// console.log(MyArr.sort());



let combineArr = [...arr,...MyArr]
console.log(combineArr);


let element1 = 12;
let element2 = 35;
let element3 = 78;

let data = Array.of(element1,element2,element3);
console.log(data);
