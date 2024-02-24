import { TestBed } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { Navigate } from '@ngxs/router-plugin';

import { AuthStatusState, AuthStatusStateModel } from './auth-status.state';
import { LoginSuccess, Logout, LoginRedirect } from '../actions/auth.actions';

describe('AuthStatusState', () => {
  let store: Store;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([AuthStatusState])],
    });

    store = TestBed.inject(Store);
  });

  it('should set loggedIn to true and set the user on LoginSuccess', () => {
    const user = { name: 'John Doe' };
    store.dispatch(new LoginSuccess({ user }));

    const state: AuthStatusStateModel = store.selectSnapshot(
      (state) => state.status
    );

    expect(state.loggedIn).toBe(true);
    expect(state.user).toBe(user);
  });

  it('should set loggedIn to false, reset the user, and navigate to /login on Logout', () => {
    store.dispatch(new Logout());

    const state: AuthStatusStateModel = store.selectSnapshot(
      (state) => state.status
    );

    expect(state.loggedIn).toBe(false);
    expect(state.user).toBeNull();
  });

  it('should set loggedIn to false, reset the user, and navigate to /login on LoginRedirect', () => {
    store.dispatch(new LoginRedirect());

    const state: AuthStatusStateModel = store.selectSnapshot(
      (state) => state.status
    );

    expect(state.loggedIn).toBe(false);
    expect(state.user).toBeNull();
  });
});