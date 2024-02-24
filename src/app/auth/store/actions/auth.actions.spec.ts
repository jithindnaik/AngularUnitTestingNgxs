import { Authenticate, User } from '../../models/user';
import { Login, LoginSuccess, LoginFailure, LoginRedirect, Logout } from './auth.actions';

describe('Auth Actions', () => {
  it('should create Login action', () => {
    const authenticate: Authenticate = { username: 'testuser', password: 'password' };
    const action = new Login(authenticate);
    expect(action.payload).toEqual(authenticate);
  });

  it('should create LoginSuccess action', () => {
    const user: User = { name: 'testuser' };
    const action = new LoginSuccess({ user });
    expect(action.payload.user).toEqual(user);
  });

  it('should create LoginFailure action', () => {
    const error = { message: 'Authentication failed' };
    const action = new LoginFailure(error);
    expect(action.payload).toEqual(error);
  });

  it('should create LoginRedirect action', () => {
    const action = new LoginRedirect();
    expect(LoginRedirect.type).toEqual('[Auth] Login Redirect');
  });

  it('should create Logout action', () => {
    const action = new Logout();
    expect(Logout.type).toEqual('[Auth] Logout');
  });
});