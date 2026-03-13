class AuthService {
  private users: any[] = [];
  private nextId = 1;

  register(email: string, password: string, name: string) {
    const existing = this.users.find((u) => u.email === email);
    if (existing) {
      return null;
    }

    const user = {
      id: this.nextId++,
      email,
      password: Buffer.from(password).toString("base64"),
      name,
      createdAt: new Date().toISOString(),
    };

    this.users.push(user);
    return { id: user.id, email, name };
  }

  login(email: string, password: string) {
    const user = this.users.find((u) => u.email === email);
    if (!user) {
      return null;
    }

    const encodedPassword = Buffer.from(password).toString("base64");
    if (user.password !== encodedPassword) {
      return null;
    }

    return { id: user.id, email: user.email, name: user.name };
  }
}

export const authService = new AuthService();
