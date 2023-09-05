import Shape from "./Shape";

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }
  calcArea(): number {
    return Math.pow(this.radius, 2) * Math.PI;
  }
}

export default Circle;
