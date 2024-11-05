// const variable is used to declare the value that can not be changed.
const accountId = 1234;
let accountEmail = "vraj@gmail.com";
var password = "123";
accountCity = "Anand";


// This will give error because it can not be changed.
// accountId = 123;


// All Below Changes are done.
accountEmail = "vraj123@gmail.com";
password = "12";
accountCity = "Rajstan";
let data;

// We have Two Methods to Print Variables 
console.log(accountEmail);
console.log(password);
console.log(accountCity);


console.table([accountId , accountEmail , accountCity,password,data]);

/*

    Note: we have two method to declare variables.
    1.let
    2.var

    --> We use let as Scoped Variables.
    --> also js is dynamictype language.
    --> default state is var.
    --> Js make variable without assighnment undefined.
    --> Prefer let variable is used.

*/
