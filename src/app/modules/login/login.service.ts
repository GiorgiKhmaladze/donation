import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiBaseUrl = environment.apiBaseUrl;

  constructor(private httpClient: HttpClient) { }

  public login(username: string, password: string): Observable<any> {
    return this.httpClient
      .post<any>(this.apiBaseUrl + '/users/login', { username, password });
  }
}
