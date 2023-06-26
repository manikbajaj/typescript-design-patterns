// Singleton Logger Class
// log method
// Can have multiple methods

class Logger {
  private static intance: Logger;

  private constructor() {}

  public static getInstance(): Logger {
    if (!Logger.intance) {
      Logger.intance = new Logger();
    }
    return Logger.intance;
  }

  public log(message: string): void {
    const timestamp = new Date();
    console.log(`[ ${timestamp.toLocaleString()}] - ${message}`);
  }
}

// New Intance
let logger1 = Logger.getInstance();
logger1.log("This is the first message");

let logger2 = Logger.getInstance();
logger2.log("This is the message two");
