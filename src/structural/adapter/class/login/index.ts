import { AuthenticationInterface } from "../../interface/authentication/authentication-interface";

type User = {
  email: string;
  password: string;
};

export class Login {
  constructor(
    private readonly auth: AuthenticationInterface,
    private readonly user: User
  ) {}

  async execute() {
    const user = this.user;

    const token = this.auth.generateToken(user, { expiresIn: "7d" });

    return {
      user: {
        email: user.email,
      },
      token,
    };
  }
}
