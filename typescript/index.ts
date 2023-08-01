interface ServerRequest {
  handle(request: any): void;
  // cancel(request: any): void;
}

class BaseServer implements ServerRequest {
  public handle(request: any): void {
    console.log("Handling Request: ", request);
  }
}

abstract class ServerRequestDecorator implements ServerRequest {
  constructor(protected serverRequest: ServerRequest) {}

  abstract handle(request: any): void;
}

class LoggingMiddleware extends ServerRequestDecorator {
  public handle(request: any): void {
    console.log("Logging Request: ", request);
    this.serverRequest.handle(request);
  }
}

class AuthMiddleware extends ServerRequestDecorator {
  public handle(request: any): void {
    if (request.isAuthenticated) {
      console.log("Request is authenticated");
      this.serverRequest.handle(request);
    } else {
      console.log("unAuthorised Access");
    }
  }
}

// Client Code

const request = {
  isAuthenticated: false,
  body: "hello world",
};

let server: ServerRequest = new BaseServer();
server = new LoggingMiddleware(server);
server = new AuthMiddleware(server);
server.handle(request);
