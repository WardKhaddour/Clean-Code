import Circle from "./Circle";
import Rectangle from "./Rectangle";
import Shape from "./Shape";
import Square from "./Square";

const shapes: Shape[] = [new Rectangle(4, 6), new Square(4), new Circle(4)];

shapes.forEach((shape) => {
  console.log(shape.calcArea());
});
