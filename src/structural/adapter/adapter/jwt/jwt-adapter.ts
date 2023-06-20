import { AuthenticationInterface } from "../../interface/authentication/authentication-interface";
import * as jwt from "jsonwebtoken";

export class JWTAdapter implements AuthenticationInterface {
  constructor(private readonly secret: string) {
    this.secret = secret;
  }

  generateToken(payload: any, options?: any): string {
    const token = jwt.sign(payload, this.secret, options);
    return token;
  }

  validateToken(token: string, options?: any) {
    return jwt.verify(token, this.secret, options);
  }
}
