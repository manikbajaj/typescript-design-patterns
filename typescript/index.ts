interface Handler {
  setNext(handler: Handler): Handler;
  handle(request: string): string | null;
}

abstract class AbstractHandler implements Handler {
  private nextHandler: Handler | null = null;

  public setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    // Rerturing a handler
    // allows conveninent chaining
    return handler;
  }

  public handle(request: string): string | null {
    if (this.nextHandler) {
      return this.nextHandler.handle(request);
    }
    return null;
  }
}

class MonkeyHandler extends AbstractHandler {
  public handle(request: string): string | null {
    if (request === "Banana") {
      return `Moneky: I'll eat the ${request}`;
    }
    return super.handle(request);
  }
}

class SquirrelHandler extends AbstractHandler {
  public handle(request: string): string | null {
    if (request === "Nut") {
      return `Squirrel: I'll eat the ${request}`;
    }
    return super.handle(request);
  }
}

class DogHandler extends AbstractHandler {
  public handle(request: string): string | null {
    if (request === "MeatBall") {
      return `Dog: I'll eat the ${request}`;
    }
    return super.handle(request);
  }
}

// client code
function clientCode(handler: Handler) {
  const foods = ["Nut", "Banana", "Cup Of Coffee", "MeatBall"];

  for (const food of foods) {
    console.log(`Who wants to eat ${food}`);
    const result = handler.handle(food);
    if (result) {
      console.log(result);
    } else {
      console.log(`${food} was left untouched `);
    }
  }
}

const monkey = new MonkeyHandler();
const squirrel = new SquirrelHandler();
const dog = new DogHandler();

// Chaining handlers
monkey.setNext(squirrel).setNext(dog);

clientCode(monkey);
