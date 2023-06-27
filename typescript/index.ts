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

class Application {
  constructor(private logger: Logger) {}

  run(): void {
    this.logger.log("Application is running");
    this.logger.log("Application is shutting down");
  }
}

let logger = Logger.getInstance();
let app = new Application(logger);
app.run();
