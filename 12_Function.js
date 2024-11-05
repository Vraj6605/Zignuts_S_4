console.log("Functions and Parameters");


function add(a,b){
  if(typeof a == typeof b){
    return a+b;
  }else{
    console.log("Please Enter Correct Input!");
    
  }
}

function userLOGIN(uname = "Krishna"){
  if(uname){
    return `${uname} is Just Logged in.`
  }else{
    return "Not found."
  }
}

console.log(add(2,3));
console.log(userLOGIN());


