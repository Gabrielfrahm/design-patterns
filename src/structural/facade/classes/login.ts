export class Login {
  authenticate(email: string, password: string): boolean {
    if (email && password) {
      return true;
    }
    return false;
  }
}
