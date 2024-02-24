import { AuthService } from './auth.service';

describe('AuthService', () => {
    let authService: AuthService;

    beforeEach(() => {
        authService = new AuthService();
    });

    it('should log in successfully', () => {
        const authData = { username: 'test', password: 'password' };

        authService.login(authData).subscribe(
            (user) => {
                expect(user.name).toEqual('User');
            },
            (error) => {
                fail('Login should succeed');
            }
        );
    });

    it('should handle invalid username or password', () => {
        const authData = { username: 'wrong', password: 'password' };

        authService.login(authData).subscribe(
            (user) => {
                fail('Login should fail');
            },
            (error) => {
                expect(error).toEqual('Invalid username or password');
            }
        );
    });
});