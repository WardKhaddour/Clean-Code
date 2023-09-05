import Shape from "./Shape";
import Shapes from "./Shapes";

const rectangle = new Shape(Shapes.Rectangle);
rectangle.height = 10;
rectangle.width = 4;
console.log(rectangle.calcArea());

const square = new Shape(Shapes.Square);
square.width = 4;
console.log(square.calcArea());

const circle = new Shape(Shapes.Circle);
circle.radius = 4;
console.log(circle.calcArea());
