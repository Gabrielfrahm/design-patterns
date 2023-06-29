import { ChannelCommand } from "../command/channel-command";
import { PowerCommand } from "../command/power-command";
import { VolumeCommand } from "../command/volume-command";
import { RemoteControl } from "../invoker/invoker-class";
import { Tv } from "../receive/receiver-class";

describe("command test", () => {
  test("command ", () => {
    const receive = new Tv();
    const invoker = new RemoteControl();
    const powerCommand = new PowerCommand(receive);
    const channelCommand = new ChannelCommand(receive, "20");
    const volumeCommand = new VolumeCommand(receive, 10);
    invoker.addCommand("btn-01", powerCommand);
    invoker.addCommand("btn-02", channelCommand);
    invoker.addCommand("btn-03", volumeCommand);
    expect(receive.power).toBeFalsy();
    expect(receive.channel).toBe("12");
    expect(receive.volume).toBe(5);

    invoker.executeCommand("btn-01");
    invoker.executeCommand("btn-02");
    invoker.executeCommand("btn-03");
    expect(receive.power).toBeTruthy();
    expect(receive.channel).toBe("20");
    expect(receive.volume).toBe(10);
  });
});
