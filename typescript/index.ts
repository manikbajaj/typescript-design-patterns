// Payment Processor
// Credit Card
// Debit Card
// PayPal

abstract class PaymentProcessor {
  abstract processPayment(amount: number): void;
}

class CreditCardProcessor extends PaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Processing Credit Card Payments - Amount $${amount}`);
  }
}

class DebitCardProcessor extends PaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Processing Debit Card Payments - Amount $${amount}`);
  }
}

class PayPalProcessor extends PaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Processing PayPal Payments - Amount $${amount}`);
  }
}

function executePayment(
  paymentProcessor: PaymentProcessor,
  amount: number
): void {
  paymentProcessor.processPayment(amount);
}

let creditCardProcessor = new CreditCardProcessor();
let debitCardProcessor = new DebitCardProcessor();
let payPalProcessor = new PayPalProcessor();

executePayment(creditCardProcessor, 100);
executePayment(debitCardProcessor, 50);
executePayment(payPalProcessor, 150);
