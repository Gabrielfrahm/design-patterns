import { log } from "console";
import { JWTAdapter } from "../adapter/jwt/jwt-adapter";
import { Login } from "../class/login";

describe("adapter test", () => {
  let jwtAdapter: JWTAdapter;
  let user: {
    email: string;
    password: string;
  };
  beforeAll(() => {
    jwtAdapter = new JWTAdapter("213231312123123");
    user = {
      email: "test@teste.com",
      password: "123456",
    };
  });

  it("should be generate token", async () => {
    const login = new Login(jwtAdapter, user);
    const result = await login.execute();
    expect(result).toHaveProperty("user");
    expect(result).toHaveProperty("token");
    expect(result.user).toStrictEqual({
      email: "test@teste.com",
    });
    expect(jwtAdapter.validateToken(result.token)).toBeTruthy();
  });
});
