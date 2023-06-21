import { Radio } from "../device/radio";
import { Tv } from "../device/tv";

import { RemoteControl } from "../remote-control/remote-control";
import { RemoveControlWithVolume } from "../remote-control/remote-control-with-volume";

describe("bridge test", () => {
  let client = (abstraction: RemoteControl | RemoveControlWithVolume) => {
    abstraction.togglePower();

    // Type Guard
    if (!("volumeUp" in abstraction)) return;

    abstraction.volumeUp();
    abstraction.volumeUp();
    abstraction.volumeDown();
  };

  test("tv", () => {
    const tv = new Tv();
    const tvRemoteControl = new RemoveControlWithVolume(tv);
    client(tvRemoteControl);
    expect(tv.getPower()).toBeTruthy();
    expect(tv.getVolume()).toBe(20);
  });

  test("radio", () => {
    const radio = new Radio();
    const radioRemoteControl = new RemoteControl(radio);
    client(radioRemoteControl);
    expect(radio.getPower()).toBeTruthy();
  });
});
