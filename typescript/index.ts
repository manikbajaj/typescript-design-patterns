// shapes
// Area, Perimeter
// simple - single function calculateTotalArea

// Interface A Shape
interface Shape {
  area(): number;
  perimeter(): number;
}

class Circle implements Shape {
  constructor(private radius: number) {}

  area(): number {
    return Math.PI * this.radius * this.radius;
  }

  perimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}

  area(): number {
    return this.width * this.height;
  }

  perimeter(): number {
    return 2 * (this.width + this.height);
  }
}

function calculateTotalArea(shape: Shape): number {
  return shape.area();
}

let circle: Circle = new Circle(5);
let rectangle: Rectangle = new Rectangle(4, 6);
console.log("Area Of Circle: ", calculateTotalArea(circle));
console.log("Area Of Reactangle: ", calculateTotalArea(rectangle));
