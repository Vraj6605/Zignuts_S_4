console.log("IIFE");


// IIFE used to Protect Global scoped Pollution and It will execuete fast.

(() => {
  console.log("Quick!");
})();



(function(){
  console.log("Quick!");
})();
