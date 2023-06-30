abstract class Car {
  constructor(public model: string, public productionYear: number) {}

  abstract displyCarInfo(): void;
}

class Sedan extends Car {
  public displyCarInfo(): void {
    console.log(
      `This is a Sedan. Model: ${this.model}, Production Year: ${this.productionYear}`
    );
  }
}

class SUV extends Car {
  public displyCarInfo(): void {
    console.log(
      `This is a SUV. Model: ${this.model}, Production Year: ${this.productionYear}`
    );
  }
}

class Hatchback extends Car {
  public displyCarInfo(): void {
    console.log(
      `This is a Hatchback. Model: ${this.model}, Production Year: ${this.productionYear}`
    );
  }
}

class CarFactory {
  public createcar(
    type: "sedan" | "suv" | "hatchback",
    model: string,
    productionYear: number
  ): Car {
    switch (type) {
      case "sedan":
        return new Sedan(model, productionYear);
      case "suv":
        return new SUV(model, productionYear);
      case "hatchback":
        return new Hatchback(model, productionYear);
      default:
        throw new Error("Invalid car type");
    }
  }
}

const carFactory = new CarFactory();

const sedan = carFactory.createcar("sedan", "Camry", 2023);
sedan.displyCarInfo();

const suv = carFactory.createcar("suv", "RAV4", 2023);
suv.displyCarInfo();

const hatchback = carFactory.createcar("hatchback", "Corolla", 2023);
hatchback.displyCarInfo();
