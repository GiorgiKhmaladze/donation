import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiBaseUrl = environment.apiBaseUrl;

  public userInfo;

  get user(): any {
    return this.userInfo;
  }

  constructor(private httpClient: HttpClient) {
    this.userInfo = JSON.parse(localStorage.getItem('user'));
  }

  public login(username: string, password: string): Observable<any> {
    return this.httpClient
      .post<any>(this.apiBaseUrl + '/users/login', { username, password });
  }

  public register(userData): Observable<any> {
    return this.httpClient
      .post<any>(this.apiBaseUrl + '/users', userData);
  }

  public setUserInfo(user: any): void {
    this.userInfo = user;
  }
}
