interface LightState {
  switchState(lightSwitch: LightSwitch): void;
}

class OnState implements LightState {
  public switchState(lightSwitch: LightSwitch): void {
    console.log("Light state is On. Turning Off ...");
    lightSwitch.setState(new OffState());
  }
}
class OffState implements LightState {
  public switchState(lightSwitch: LightSwitch): void {
    console.log("Light state is Off. Turning On ...");
    lightSwitch.setState(new OnState());
  }
}

class LightSwitch {
  constructor(private state: LightState) {}

  public setState(state: LightState): void {
    this.state = state;
  }
  public press(): void {
    this.state.switchState(this);
  }
}

// client code
const lightSwitch = new LightSwitch(new OffState());
lightSwitch.press();
lightSwitch.press();
