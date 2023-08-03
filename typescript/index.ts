class User {
  constructor(public name: string) {}
}

interface MyIteratorResult<T> {
  value: T | null;
  done: boolean;
}

interface MyIterator<T> {
  next(): MyIteratorResult<T>;
  hastNext(): boolean;
}

interface Collection<T> {
  createIterator(): MyIterator<T>;
}

class UserCollection implements Collection<User> {
  constructor(private users: User[]) {}

  public createIterator(): MyIterator<User> {
    return new UserIterator(this);
  }

  public getItems(): User[] {
    return this.users;
  }
}

class UserIterator implements MyIterator<User> {
  private collection: UserCollection;
  private position: number = 0;

  constructor(collection: UserCollection) {
    this.collection = collection;
  }

  public hastNext(): boolean {
    console.log(this.collection.getItems());
    return this.position < this.collection.getItems().length;
  }

  public next(): MyIteratorResult<User> {
    if (this.hastNext()) {
      return {
        value: this.collection.getItems()[this.position++],
        done: false,
      };
    } else {
      return { value: null, done: true };
    }
  }
}

// Client Code
const users = [new User("Alice"), new User("Bob"), new User("Charlie")];

// Convert Array of Users into a collection
const userCollection = new UserCollection(users);

// create an iterator
const iterator = userCollection.createIterator();
const iterator2 = userCollection.createIterator();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator2.next());
