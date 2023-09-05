import Shapes from "./Shapes";

class Shape {
  public width!: number;
  public height!: number;
  public radius!: number;
  constructor(public type: Shapes) {}

  calcArea(): number {
    if (this.type === Shapes.Rectangle) {
      return this.height * this.width;
    } else if (this.type === Shapes.Square) {
      return this.width * this.width;
    } else if (this.type === Shapes.Circle) {
      return Math.pow(this.radius, 2) * Math.PI;
    }
    throw new Error("Unsupported shape");
  }
}

export default Shape;
