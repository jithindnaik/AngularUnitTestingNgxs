import { TestBed } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';

import { AuthState } from './auth.state';
import { AuthStatusState } from './auth-status.state';
import { LoginPageState } from './login-page.state';
import { AuthService } from '../../services/auth.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('AuthState', () => {
  let store: Store;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([AuthState, AuthStatusState, LoginPageState])],
      providers: [AuthService],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    });

    store = TestBed.inject(Store);
  });

  it('should have AuthStatusState and LoginPageState as children states', () => {
    const state = store.snapshot();
    
    expect(state.auth).toBeDefined();
    expect(state.auth.status.loggedIn).toBeDefined();
    expect(state.auth.status.user).toBeDefined();
  });
});