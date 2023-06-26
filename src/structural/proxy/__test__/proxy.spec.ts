import { User } from "../user";
import { UserProxy } from "../user-proxy";

describe("proxy test", () => {
  it("should be able list todo done", async () => {
    const user = new User("zezinho", "teste@test.com");

    // demora 2 segundos
    console.log(await user.getTodoDone());
  });

  it("should be able list todo done by proxy", async () => {
    const user = new UserProxy("zezinho", "teste@test.com");
    // demora 2 segundos
    console.log(await user.getTodoDone());

    // em cache
    console.log(await user.getTodoDone());
  });
});
