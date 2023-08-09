class Order {
  public isValid() {
    return true;
  }

  public applyDiscount() {
    // discount
  }

  public processPayment() {
    return true;
  }

  public ship() {
    // shippingthe order
  }
}

interface Handler {
  setNext(handler: Handler): Handler;
  handle(order: Order): string | null;
}

abstract class AbstractHandler implements Handler {
  private nextHandler: Handler | null = null;

  public setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    return handler;
  }

  public handle(order: Order): string | null {
    if (this.nextHandler) {
      return this.nextHandler.handle(order);
    }
    return null;
  }
}

class ValidationHandler extends AbstractHandler {
  public handle(order: Order): string | null {
    if (order.isValid()) {
      return super.handle(order);
    }
    return "Validation Failed";
  }
}

class DiscountHandler extends AbstractHandler {
  public handle(order: Order): string | null {
    order.applyDiscount();
    return super.handle(order);
  }
}

class PaymentHandler extends AbstractHandler {
  public handle(order: Order): string | null {
    if (order.processPayment()) {
      return super.handle(order);
    }
    return "Payment Failed";
  }
}

class ShippingHandler extends AbstractHandler {
  public handle(order: Order): string | null {
    order.ship();
    return "Order processed and shipped";
  }
}

// client code
const order = new Order();
const orderHandler = new ValidationHandler();

orderHandler
  .setNext(new DiscountHandler())
  .setNext(new PaymentHandler())
  .setNext(new ShippingHandler());

console.log(orderHandler.handle(order));
