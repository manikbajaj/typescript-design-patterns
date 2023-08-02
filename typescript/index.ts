interface Observer {
  update(subject: Subject): void;
}

class ConcreteObserever implements Observer {
  constructor(private id: number) {}
  public update(subject: Subject): void {
    console.log(
      `Observer ${this.id} updated, new state: ${subject.getState()}`
    );
  }
}

interface Subject {
  addObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notifyObservers(): void;
  getState(): number;
  setState(state: number): void;
}

class ConcreteSubject implements Subject {
  private observers: Observer[] = [];
  private state: number = 0;

  public addObserver(observer: Observer): void {
    const isExists = this.observers.includes(observer);
    if (isExists) {
      return console.log("Observer already exists");
    }

    this.observers.push(observer);
    console.log("Observer Added Successfully");
  }

  public removeObserver(observer: Observer): void {
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex === -1) {
      return console.log("Observer Does not Exist");
    }
    this.observers.splice(observerIndex, 1);
    console.log("Observer was successfully removed");
  }

  public notifyObservers(): void {
    this.observers.forEach((observer) => observer.update(this));
  }

  public getState(): number {
    return this.state;
  }

  public setState(state: number): void {
    this.state = state;
    console.log("Setting State ....");
    this.notifyObservers();
  }
}

// client code
const subject = new ConcreteSubject();

const observer1 = new ConcreteObserever(1);
subject.addObserver(observer1);

const observer2 = new ConcreteObserever(2);
subject.addObserver(observer2);

subject.setState(123);
