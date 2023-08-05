abstract class DataParser {
  public parseData(): void {
    this.loadData();
    const data = "Sample Data";
    const parsedData = this.parse(data);
    this.validate(parsedData);
    this.useData(parsedData);
  }

  protected loadData(): void {
    console.log("Loading Data...");
  }

  protected validate(data: any): void {
    console.log("Validating data....");
  }

  protected useData(data: any): void {
    console.log("Using Data...");
  }

  protected abstract parse(data: any): void;
}

class JSONParser extends DataParser {
  protected parse(data: any): void {
    console.log("Parsing data as JSON");
    // JSON.parse(data);
    return data;
  }
}

class XMLParser extends DataParser {
  protected parse(data: any): void {
    console.log("Parsing data as XML");
    return data;
  }
}

// Client code
function dataParser(dataParser: DataParser) {
  dataParser.parseData();
}

console.log("Parsing JSON data");
dataParser(new JSONParser());

console.log("Parsing XML data");
dataParser(new XMLParser());
