interface FileSystemComponent {
  getName(): string;
  getSize(): number;
}

class FileComponent implements FileSystemComponent {
  constructor(private name: string, private size: number) {}

  public getName(): string {
    return this.name;
  }

  public getSize(): number {
    return this.size;
  }
}

interface CompositeFileSystemComponent extends FileSystemComponent {
  addComponent(component: FileSystemComponent): void;
  removeComponent(component: FileSystemComponent): void;
  getComponents(): FileSystemComponent[];
}

class Folder implements CompositeFileSystemComponent {
  private components: FileSystemComponent[] = [];
  constructor(private name: string) {}

  public getName(): string {
    return this.name;
  }

  public getSize(): number {
    return this.components.reduce(
      (total, component) => total + component.getSize(),
      0
    );
  }

  public addComponent(component: FileSystemComponent): void {
    this.components.push(component);
  }

  public removeComponent(component: FileSystemComponent): void {
    const index = this.components.indexOf(component);
    if (index !== -1) {
      this.components.splice(index, 1);
    }
  }

  public getComponents(): FileSystemComponent[] {
    return this.components;
  }
}

// Client Code
let file1 = new FileComponent("file1.txt", 500);
let file2 = new FileComponent("file2.txt", 800);
let file3 = new FileComponent("file3.txt", 1200);

let folder = new Folder("My Folder");
folder.addComponent(file1);
folder.addComponent(file2);
folder.addComponent(file3);

console.log(`Folder ${folder.getName()}  Contains:`);
folder
  .getComponents()
  .map((component) =>
    console.log(
      `- ${component.getName()} with the size of ${component.getSize()} bytes`
    )
  );

console.log(`Total Size ${folder.getSize()}`);
