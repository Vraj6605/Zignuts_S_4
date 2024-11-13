/*
   Task6:
   Writeaprogramtofind the factorial of a number using a recursive function

*/

let fact = (n) => {
  if(n == 0 || n == 1){
    return 1;
  }else{
    return n * fact(n-1);
  }
}

console.log(fact(5));
