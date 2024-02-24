import { Authenticate, User } from "./user";

describe('Authenticate', () => {
  it('should have username and password properties', () => {
    const authData: Authenticate = {
      username: 'test',
      password: 'password',
    };

    expect(authData.username).toBeDefined();
    expect(authData.password).toBeDefined();
  });

  it('should have name property', () => {
    const user: User = {
      name: 'User',
    };

    expect(user.name).toBeDefined();
  });
});