// Generated by CoffeeScript 2.0.1
var Circle, Shape, Square, showArea;

Shape = class Shape {
  constructor(width) {
    this.width = width;
  }

  computeArea() {
    throw new Error('I am an abstract class!');
  }

};

Square = class Square extends Shape {
  computeArea() {
    return Math.pow(this.width, 2);
  }

};

Circle = class Circle extends Shape {
  radius() {
    return this.width / 2;
  }

  computeArea() {
    return Math.PI * Math.pow(this.radius(), 2);
  }

};

showArea = function(shape) {
  if (!(shape instanceof Shape)) {
    throw new Error('showArea requires a Shape instance!');
  }
  return console.log(shape.computeArea());
};

showArea(new Square(2));

showArea(new Circle(2));