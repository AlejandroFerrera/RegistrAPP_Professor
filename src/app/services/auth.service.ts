import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loginUrl: string = 'https://registrapp.onrender.com/api/login';
  private loginSuccess: boolean = false;

  constructor(private http: HttpClient) {}

  private setSession(context: User) {
    try {
      const token = context.token;
      const idProfesor = context.idProfesor;


      localStorage.setItem('token', token);
      localStorage.setItem('idProfesor', idProfesor.toString());
      this.loginSuccess = true;
    } catch (error) {
      this.loginSuccess = false;
    }
  }

  login(email: string, password: string) {
    return this.http
      .post<User>(this.loginUrl, { email, password })
      .pipe(tap((response) => this.setSession(response)));
  }

  getToken(): string {
    return localStorage.getItem('token')!;
  }

  isLogedIn() {
    return this.loginSuccess;
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('idProfesor');
  }
}
