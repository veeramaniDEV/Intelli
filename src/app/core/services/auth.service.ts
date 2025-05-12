import { Injectable } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class AuthService {
    isAuthenticated(): boolean {
        return !!localStorage.getItem('loggedIn');
    }
    login(username: string, password: string): boolean {
        if (username === 'admin' && password === 'admin') {
            localStorage.setItem('loggedIn', 'true');
            return true;
        }
        return false;
    }
    logout(): void {
        localStorage.removeItem('loggedIn');
    }
}