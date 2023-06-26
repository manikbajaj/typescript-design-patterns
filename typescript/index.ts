class Singleton {
  private static intance: Singleton;
  private static _value: number;

  private constructor() {}

  public static getInstance(): Singleton {
    if (!Singleton.intance) {
      Singleton.intance = new Singleton();
    }
    return Singleton.intance;
  }

  set value(value: number) {
    Singleton._value = value;
  }

  get value() {
    return Singleton._value;
  }
}

let instance1 = Singleton.getInstance();
let instance2 = Singleton.getInstance();
instance1.value = 10;
console.log(instance1.value);
console.log(instance2.value);
console.log(instance1 === instance2);
