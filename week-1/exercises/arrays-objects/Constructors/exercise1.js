// Write a constructor called Rectangle that accepts two numbers (width and height) as parameters. Rectangle instances should have a method called getArea that returns the instance's width multiplied by its height. Write another constructor called Square that accepts one number (which will serve as both width and the height) as a parameter. Instances of Square should also have a getArea method but you should not rewrite the getArea function you wrote for Rectangle. Square instances should use the same getArea method that Rectangle instances do.

function Rectangle(width, height) {
    this.width = width;
    this.height = height;
}

Rectangle.prototype.getArea = function () {
    return this.width * this.height;
};

function Square(n) {
    Rectangle.call(this, n, n);
}
console.log(Rectangle.prototype);
Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

var r = new Rectangle(4, 6);
var s = new Square(10);

console.log(r.getArea());
console.log(s.getArea());
