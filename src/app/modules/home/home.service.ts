import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Widget } from 'src/app/shared/interfaces/widget.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private apiBaseUrl = environment.apiBaseUrl;
  constructor(private httpClient: HttpClient) { }

  public getHomeWidgets(): Observable<Widget[]> {
    return this.httpClient
      .get<Widget[]>(this.apiBaseUrl + '/widgets');
  }

}
