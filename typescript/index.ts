interface Tool {
  onMouseDown(): void;
  onMouseUp(): void;
}

class SelectionTool implements Tool {
  public onMouseDown(): void {
    console.log("Selection started");
  }
  public onMouseUp(): void {
    console.log("Selection drawn");
  }
}

class BrushTool implements Tool {
  public onMouseDown(): void {
    console.log("Brush stroke started");
  }
  public onMouseUp(): void {
    console.log("Brush stroke drawn");
  }
}

class EraserTool implements Tool {
  public onMouseDown(): void {
    console.log("Eraser started");
  }
  public onMouseUp(): void {
    console.log("Erased");
  }
}

class Canvas {
  constructor(private tool: Tool) {}

  public setTool(tool: Tool): void {
    this.tool = tool;
  }

  public onMouseDown(): void {
    this.tool.onMouseDown();
  }

  public onMouseUp(): void {
    this.tool.onMouseUp();
  }
}

// client code
let canvas = new Canvas(new SelectionTool());
canvas.onMouseDown();
canvas.onMouseUp();

canvas.setTool(new BrushTool());
canvas.onMouseDown();
canvas.onMouseUp();

canvas.setTool(new EraserTool());
canvas.onMouseDown();
canvas.onMouseUp();
