interface ICommand {
  execute(): void;
  undo(): void;
}

class Light {
  public turnOn(): void {
    console.log("The Light is on");
  }

  public turnOff(): void {
    console.log("The Light is off");
  }
}

class TurnOnCommand implements ICommand {
  constructor(private light: Light) {}

  public execute(): void {
    this.light.turnOn();
  }

  public undo(): void {
    this.light.turnOff();
  }
}

class TurnOffCommand implements ICommand {
  constructor(private light: Light) {}

  public execute(): void {
    this.light.turnOff();
  }

  public undo(): void {
    this.light.turnOn();
  }
}

class SimpleRemoteControl {
  private currentCommand!: ICommand;
  private undoCommand!: ICommand;
  private commandQueue: ICommand[] = [];

  public setCommand(command: ICommand): void {
    this.undoCommand = this.currentCommand;
    this.currentCommand = command;
    this.commandQueue.push(command);
  }

  public buttonWasPressed(): void {
    if (this.commandQueue.length) {
      const command = this.commandQueue.shift();
      command?.execute();
    }
  }

  public undoButtonWasPressed(): void {
    this.undoCommand.execute();
  }

  public hasCommands(): boolean {
    return this.commandQueue.length > 0;
  }
}

// client Code
const remote: SimpleRemoteControl = new SimpleRemoteControl();
const light: Light = new Light();

// Turning On The Light
remote.setCommand(new TurnOnCommand(light));
remote.buttonWasPressed();

// Turning Off the Light
remote.setCommand(new TurnOffCommand(light));
remote.buttonWasPressed();

// Undo last operation
remote.undoButtonWasPressed();

// Create a command que
remote.setCommand(new TurnOnCommand(light));
remote.setCommand(new TurnOffCommand(light));

while (remote.hasCommands()) {
  remote.buttonWasPressed();
}
