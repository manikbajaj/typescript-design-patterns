class Grinder {
  public grindBeads(): void {
    console.log("Grinding beans ...");
  }
}

class Boiler {
  public boilWater(): void {
    console.log("Boiling Water ...");
  }
}

class Brewer {
  public brewCoffee(): void {
    console.log("Brewing Coffee ...");
  }
}

class CoffeeMakerFacade {
  constructor(
    private grinder: Grinder,
    private boiler: Boiler,
    private brewer: Brewer
  ) {}

  public makeCoffee() {
    this.grinder.grindBeads();
    this.boiler.boilWater();
    this.brewer.brewCoffee();
    console.log("The Coffee is ready");
  }
}

// Client code
let grinder = new Grinder();
let boilder = new Boiler();
let brewer = new Brewer();

let coffeeMaker = new CoffeeMakerFacade(grinder, boilder, brewer);
coffeeMaker.makeCoffee();
