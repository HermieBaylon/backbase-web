import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { isInvalidToken401 } from './auth.utils';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private oAuthService: OAuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error) => {
        if (isInvalidToken401(error) && !this.oAuthService.hasValidAccessToken()) {
          this.oAuthService.initLoginFlow();
        }
        return throwError(error);
      }),
    );
  }
}
