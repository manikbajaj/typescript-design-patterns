abstract class CakeRecipe {
  public bakeCake(): void {
    this.preHeatOven();
    this.mixIngredients();
    this.bake();
    this.coolingDown();
    this.decorate();
  }

  protected preHeatOven(): void {
    console.log("Preheating oven to 175 Degree C");
  }

  protected bake(): void {
    console.log("Baking cake ....");
  }

  protected coolingDown(): void {
    console.log("Cooling down the cake ...");
  }

  protected decorate(): void {
    console.log("Decorating cake ...");
  }

  protected abstract mixIngredients(): void;
}

class ChocolateCake extends CakeRecipe {
  protected mixIngredients(): void {
    console.log("Mixing: chocolate, sugar, butter, flour, eggs");
  }

  protected decorate(): void {
    console.log(" Decorating cake with chocolate");
  }
}

class VanillaCake extends CakeRecipe {
  protected mixIngredients(): void {
    console.log("Mixing: vanilla extract, sugar, butter, flour, eggs");
  }
}

// client code
function bakecake(cake: CakeRecipe) {
  cake.bakeCake();
}

console.log("Baking a chocolate cake");
bakecake(new ChocolateCake());

console.log("Baking a vanilla cake");
bakecake(new VanillaCake());
