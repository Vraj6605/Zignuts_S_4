/*
  Task3:

  WriteaJavaScript program that creates a class called 'Shape' with a method to calculate the area.
  Create two subclasses, 'Circle' and 'Triangle', that inherit from the 'Shape' class and override the area
  calculation method. Create an instance of the 'Circle' class and calculate its area. Similarly, do the same for the 'Triangle' class.

*/

class Shape{
  area(){
    return 0;
  }  
}

class Circle extends Shape{
  constructor(radius){
    super()
    this.radius = radius;
  }
  area(){
    return parseFloat(Math.PI * this.radius * this.radius).toFixed(2);
  }
}

class Triangle extends Shape{
  constructor(base,height){
    super()
    this.base = base;
    this.height = height;
  }
  area(){
    return (this.base * this.height * 0.5).toFixed(2);
  }
}

const c1 = new Circle(7);
console.log("Area of Circle : " + c1.area());

const c2 = new Triangle(7,5);
console.log("Area of Triangle : " + c2.area());

