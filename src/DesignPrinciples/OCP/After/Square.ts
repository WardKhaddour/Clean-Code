import Shape from "./Shape";

class Square extends Shape {
  constructor(private width: number) {
    super();
  }
  calcArea(): number {
    return this.width * this.width;
  }
}
export default Square;
