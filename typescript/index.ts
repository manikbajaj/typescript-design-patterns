abstract class PaymentProcessor {
  constructor(public amount: number) {}

  abstract processPayment(): void;
}

class PaypalProcessor extends PaymentProcessor {
  public processPayment(): void {
    console.log(`Process Paypal Payment: ${this.amount} `);
  }
}

class StripeProcessor extends PaymentProcessor {
  public processPayment(): void {
    console.log(`Process Stripe Payment: ${this.amount} `);
  }
}

class BankTransferProcessor extends PaymentProcessor {
  public processPayment(): void {
    console.log(`Process Bank Transfer: ${this.amount} `);
  }
}

class PaymentProcessorFactory {
  public createProcessor(type: "paypal" | "stripe" | "bank", amount: number) {
    switch (type) {
      case "paypal":
        return new PaypalProcessor(amount);
      case "stripe":
        return new StripeProcessor(amount);
      case "bank":
        return new BankTransferProcessor(amount);
    }
  }
}

const processorFactory = new PaymentProcessorFactory();

const paypalPayment = processorFactory.createProcessor("paypal", 200);
const stripPayment = processorFactory.createProcessor("stripe", 500);

paypalPayment.processPayment();
stripPayment.processPayment();
