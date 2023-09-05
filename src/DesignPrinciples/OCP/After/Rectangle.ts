import Shape from "./Shape";

class Rectangle extends Shape {
  constructor(private width: number, private height: number) {
    super();
  }
  calcArea(): number {
    return this.width * this.height;
  }
}

export default Rectangle;
