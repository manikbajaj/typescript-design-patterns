interface Coffee {
  cost(): number;
  description(): string;
}

class SimpleCoffee implements Coffee {
  public cost(): number {
    return 10;
  }

  public description(): string {
    return "Simple Coffee";
  }
}

abstract class CoffeeDecorator implements Coffee {
  constructor(protected coffee: Coffee) {}

  abstract cost(): number;
  abstract description(): string;
}

class MilkDecorator extends CoffeeDecorator {
  constructor(coffee: Coffee) {
    super(coffee);
  }
  public cost(): number {
    return this.coffee.cost() + 2;
  }

  public description(): string {
    return `${this.coffee.description()}, with milk`;
  }
}

// client code
let coffee: Coffee = new SimpleCoffee();
coffee = new MilkDecorator(coffee);

console.log(`Cost: ${coffee.cost()}`);
console.log(`Description: ${coffee.description()}`);
