interface ShapeProperties {
  color: string;
  x: number;
  y: number;
}

abstract class Shape {
  constructor(public properties: ShapeProperties) {}
  abstract clone(): Shape;
}

class Reactangle extends Shape {
  constructor(
    properties: ShapeProperties,
    public width: number,
    public height: number
  ) {
    super(properties);
  }

  public clone(): Shape {
    let clonedProperties: ShapeProperties = {
      color: this.properties.color,
      x: this.properties.x,
      y: this.properties.y,
    };

    return new Reactangle(clonedProperties, this.width, this.height);
  }
}

class Circle extends Shape {
  constructor(properties: ShapeProperties, public radius: number) {
    super(properties);
  }

  public clone(): Shape {
    let clonedProperties: ShapeProperties = {
      color: this.properties.color,
      x: this.properties.x,
      y: this.properties.y,
    };

    return new Circle(clonedProperties, this.radius);
  }
}

let redRectangle: Shape = new Reactangle(
  {
    color: "red",
    x: 20,
    y: 100,
  },
  10,
  20
);

let anotherRectangle: Shape = redRectangle.clone();
anotherRectangle.properties.color = "blue";

console.log(redRectangle);
console.log(anotherRectangle);
