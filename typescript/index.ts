class Product {
  constructor(
    public id: string,
    public price: number,
    public description: string
  ) {}

  display(): void {
    console.log(
      `ID: ${this.id}, Price: ${this.price}, Description: ${this.description} `
    );
  }
}

class Book extends Product {
  constructor(
    public id: string,
    public price: number,
    public description: string,
    public title: string,
    public author: string
  ) {
    super(id, price, description);
  }

  display(): void {
    super.display();
    console.log(`Author: ${this.author}, Title: ${this.title}`);
  }
}

class Electronic extends Product {
  constructor(
    public id: string,
    public price: number,
    public description: string,
    public brand: string,
    public model: string
  ) {
    super(id, price, description);
  }

  display(): void {
    super.display();
    console.log(`Brand: ${this.brand}, Model: ${this.model}`);
  }
}

let book = new Book("1", 19.99, "A good book", "John Doe", "John Doe's Book");
book.display();

let laptop = new Electronic(
  "2",
  2999,
  "This is a good Laptop",
  "Dell",
  "XPS 15"
);
laptop.display();
