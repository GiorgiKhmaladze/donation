import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()

export class TokenRequestInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    /* apply token auth */
    const authHeader = { headers: request.headers.set('Authorization', 'Bearer ' + localStorage.getItem('Conform_token')) };
    const req = request.clone(authHeader);

    return next.handle(req).pipe(tap((event: HttpEvent<any>) => {

      if (event instanceof HttpResponse) {

        let token;
        if (event.headers.get('Authorization')) {
          // tslint:disable-next-line:variable-name
          const _token = event.headers.get('Authorization').split('Bearer ');
          token = _token[1];
        }

        const updatedToken = token || event.body.token;
        if (updatedToken) {
          localStorage.setItem('auth_token', updatedToken);
        }
      }

    }, (error: any) => {
      if (error instanceof HttpErrorResponse) {
        console.error(error);
      }
    })
    );
  }
}
