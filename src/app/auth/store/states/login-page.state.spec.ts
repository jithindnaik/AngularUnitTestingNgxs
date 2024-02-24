import { TestBed, async } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { LoginPageState, LoginPageStateModel } from './login-page.state';
import { Login, LoginFailure, LoginSuccess } from '../actions/auth.actions';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';

describe('LoginPageState', () => {
  let store: Store;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([LoginPageState])],
      providers: [AuthService]
    }).compileComponents();

    store = TestBed.get(Store);
  }));

  it('should set pending state to true and error to null upon login action', () => {
    const initialState: LoginPageStateModel = {
      error: 'An error occurred',
      pending: false
    };

    store.reset({
      loginPage: initialState
    });

    store.dispatch(new Login({ username: 'user', password: 'password' }));

    const state = store.selectSnapshot(LoginPageState);

    expect(state.error).toEqual('Invalid username or password');
    expect(state.pending).toBeFalsy();
  });

  it('should set pending state to false and error to null upon login success', () => {
    const initialState: LoginPageStateModel = {
      error: 'An error occurred',
      pending: true
    };

    store.reset({
      loginPage: initialState
    });

    store.dispatch(new LoginSuccess({ user: { } as User }));

    const state = store.selectSnapshot(LoginPageState);

    expect(state.error).toBeNull();
    expect(state.pending).toBeFalsy();
  });

  it('should set pending state to false and update error upon login failure', () => {
    const initialState: LoginPageStateModel = {
      error: null,
      pending: true
    };

    store.reset({
      loginPage: initialState
    });

    store.dispatch(new LoginFailure('Invalid credentials'));

    const state = store.selectSnapshot(LoginPageState);

    expect(state.error).toBe('Invalid credentials');
    expect(state.pending).toBeFalsy();
  });
});