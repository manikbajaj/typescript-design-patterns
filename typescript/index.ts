interface FilterStrategy {
  apply(image: string): void;
}

class GreyScaleStrategy implements FilterStrategy {
  public apply(image: string): void {
    console.log(`Applying greyscale filter to ${image}`);
  }
}

class SepiaStrategy implements FilterStrategy {
  public apply(image: string): void {
    console.log(`Applying sepia filter to ${image}`);
  }
}

class NegativeStrategy implements FilterStrategy {
  public apply(image: string): void {
    console.log(`Applying negative filter to ${image}`);
  }
}

class ImageProcessor {
  constructor(private strategy: FilterStrategy) {}

  public setFilterStrategy(strategy: FilterStrategy): void {
    this.strategy = strategy;
  }

  public applyFilter(image: string): void {
    this.strategy.apply(image);
  }
}

// Client Code
const imageProcessor = new ImageProcessor(new GreyScaleStrategy());
imageProcessor.applyFilter("Image.jpg");

imageProcessor.setFilterStrategy(new SepiaStrategy());
imageProcessor.applyFilter("Image2.jpg");
