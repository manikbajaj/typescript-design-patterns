// BankAccount
// Depositing
// Withdrawing
// Balance - hidden - encapsulated
//bank.balance = 200

class BankAccount {
  private _balance: number;

  constructor(initialbalance: number) {
    this._balance = initialbalance;
  }

  // Getter to get balance of the bank account
  public get balance(): number {
    return this._balance;
  }

  // Method Deposit Money
  public deposit(amount: number): void {
    if (amount < 0) {
      console.log("Invalid deposit Amount");
      return;
    }
    this._balance += amount;
  }
  // Method to withdraw money
  public withdraw(amount: number): void {
    if (amount < 0) {
      console.log("Invalid withdrawal amount");
      return;
    }
    if (this._balance - amount < 0) {
      console.log("Insufficient Funds");
      return;
    }

    this._balance -= amount;
  }
}

const myAccount = new BankAccount(1000);
myAccount.deposit(500);
myAccount.withdraw(200);
console.log("Current balance: ", myAccount.balance);
