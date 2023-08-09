interface ICommand {
  execute(): void;
  undo(): void;
}

class MyFileSystem {
  private commandQueue: ICommand[] = [];

  public addCommand(command: ICommand): void {
    this.commandQueue.push(command);
  }

  public executeCommand(): void {
    if (this.commandQueue.length > 0) {
      let command = this.commandQueue.shift();
      command?.execute();
    }
  }

  public undoCommand(): void {
    if (this.commandQueue.length > 0) {
      let command = this.commandQueue.pop();
      command?.undo();
    }
  }

  public hasCommands(): boolean {
    return this.commandQueue.length > 0;
  }
}

class CreateFileCommand implements ICommand {
  constructor(private path: string) {}

  public execute(): void {
    console.log(`Creating file at ${this.path}`);
    // logic
  }

  public undo(): void {
    console.log(`Deleting file at ${this.path}`);
  }
}

class DeleteFileCommand implements ICommand {
  constructor(private path: string) {}

  public execute(): void {
    console.log(`Deleting file at ${this.path}`);
    // logic
  }

  public undo(): void {
    console.log(`Restoring file at ${this.path}`);
  }
}

class ReadFileCommand implements ICommand {
  constructor(private path: string) {}

  public execute(): void {
    console.log(`Reading file at ${this.path}`);
    // logic
  }

  public undo(): void {
    console.log(`undo operation not available`);
  }
}

class UpdateFileCommand implements ICommand {
  constructor(
    private path: string,
    private newContent: string,
    private oldContent: string
  ) {}

  public execute(): void {
    console.log(`Updating file ${this.path}, new content: ${this.newContent}`);
  }

  public undo(): void {
    console.log(`Reverting file ${this.path}, old content: ${this.oldContent}`);
  }
}

// client code
let myFileSystem = new MyFileSystem();

// creating a file
myFileSystem.addCommand(new CreateFileCommand("/path/file.txt"));

// Update file
let updateFile = new UpdateFileCommand(
  "/path/file.txt",
  "new content",
  "old content"
);
myFileSystem.addCommand(updateFile);

// Read file
myFileSystem.addCommand(new ReadFileCommand("/path/file.txt"));

// deleting a command
myFileSystem.addCommand(new DeleteFileCommand("/path/file.txt"));

while (myFileSystem.hasCommands()) {
  myFileSystem.executeCommand();
}

myFileSystem.undoCommand();
