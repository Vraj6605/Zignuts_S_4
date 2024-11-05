// let fun1 = () => {
//   console.log("Hello Vraj.")
// }

// fun1();


const user = {
  username : "Vraj",
  salary : 3000,
  welcome : function(){
    console.log(`Welcome ${this.username}.`);
    console.log(this); 
  }
}
user.welcome();
console.log(this);

