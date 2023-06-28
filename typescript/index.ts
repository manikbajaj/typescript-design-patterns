interface UserDetails {
  name: string;
  age: number;
  email: string;
}

interface Prototype {
  clone(): Prototype;
  getUserDetails(): UserDetails;
}

class ConcretePrototype implements Prototype {
  constructor(private user: UserDetails) {}

  public clone(): Prototype {
    const clone = Object.create(this);
    clone.user = { ...this.user };
    return clone;
  }

  public getUserDetails(): UserDetails {
    return this.user;
  }
}

let user1 = new ConcretePrototype({
  name: "John",
  age: 32,
  email: "john@example.com",
});

let user2 = user1.clone();

if (user1 === user2) {
  console.log("Both instances are the same");
} else {
  console.log("Cloned objects are separate instances");
}
