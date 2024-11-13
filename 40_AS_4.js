/*

  Task4:
  WriteaJavaScript program that creates a class called University with properties for university
  names and departments. Include methods to add a department, remove a department, and display all
  departments. Create an instance of the University class and add and remove departments

*/

class University{

  University;
  departments = new Array();

  addDepartment(dname){
    this.departments.push(dname);
  }

  remDepartment(dname){
    this.departments.forEach((e) =>{
      this.departments = this.departments.filter((item) => item != dname)
    })
  }

  allDepartment(){
    if(this.departments.length != 0){
      console.table(this.departments)
    }else{
      console.log("No Department!");
      
    }
  }
}


const GTU = new University();
GTU.addDepartment("CE");
GTU.addDepartment("IT");
GTU.addDepartment("EC");
console.log(GTU.allDepartment());
GTU.remDepartment("IT")
console.log(GTU.allDepartment());




// ---------Basic Idea--------------

// let arr = [1,2,3,4,5];
// arr.forEach((e) => {
//   console.log(e);
//   console.log(arr.indexOf(e));
//   arr.filter((e) => {e == 2})
//   console.log(arr.filter((e) => e != 2));
// })

