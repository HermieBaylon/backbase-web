import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { DateTimeProvider, OAuthLogger, OAuthService, UrlHelperService } from 'angular-oauth2-oidc';
import { AuthInterceptor } from './auth.interceptor';

interface Data {
  name: string;
}

describe('AuthInterceptor', () => {
  let authService: OAuthService;
  let httpClient: HttpClient;
  let httpMock: HttpTestingController;
  let authServiceSpy: jasmine.Spy;
  const hasValidAccessTokenSpy = jasmine.createSpy('hasValidAccessToken');

  const getData = () => {
    const testUrl = '/data';
    const invalidTokenHeader = { 'WWW-AUTHENTICATE': 'Bearer error="invalid_token"' };
    const reauthHeader = { 'WWW-AUTHENTICATE': 'Bearer error="reauth"' };
    const reauthErrorOpts = { status: 401, statusText: 'Unauthorized', headers: { ...reauthHeader } };
    const invalidTokenErrorOpts = { status: 401, statusText: 'Unauthorized', headers: { ...invalidTokenHeader } };

    return { testUrl, reauthErrorOpts, invalidTokenErrorOpts };
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthInterceptor,
        UrlHelperService,
        OAuthLogger,
        DateTimeProvider,
        {
          provide: OAuthService,
          useValue: {
            hasValidAccessToken: hasValidAccessTokenSpy,
            initLoginFlow: () => {
              return true;
            },
          },
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptor,
          multi: true,
        },
      ],
      imports: [HttpClientTestingModule],
    });
    httpClient = TestBed.inject(HttpClient);
    httpMock = TestBed.inject(HttpTestingController);
    authService = TestBed.inject(OAuthService);
    authServiceSpy = spyOn(authService, 'initLoginFlow');
  });

  describe('when invalid token 401 is received', () => {
    it('should call auth service to initLoginFlow when hasValidAccessToken returns false', () => {
      const { testUrl, invalidTokenErrorOpts } = getData();
      hasValidAccessTokenSpy.and.returnValue(false);

      httpClient.get<Data>(testUrl).subscribe({
        next: () => fail('should have failed with the 401 error'),
        error: (error) => {
          expect(error.status).toEqual(invalidTokenErrorOpts.status);
          expect(error.statusText).toEqual(invalidTokenErrorOpts.statusText);
        },
      });

      const req = httpMock.expectOne(testUrl);
      req.flush({}, invalidTokenErrorOpts);
      expect(authServiceSpy).toHaveBeenCalled();
    });

    it('should not call auth service to initLoginFlow when hasValidAccessToken returns true', () => {
      const { testUrl, invalidTokenErrorOpts } = getData();
      hasValidAccessTokenSpy.and.returnValue(true);

      httpClient.get<Data>(testUrl).subscribe({
        next: () => fail('should have failed with the 401 error'),
        error: (error) => {
          expect(error.status).toEqual(invalidTokenErrorOpts.status);
          expect(error.statusText).toEqual(invalidTokenErrorOpts.statusText);
        },
      });

      const req = httpMock.expectOne(testUrl);
      req.flush({}, invalidTokenErrorOpts);
      expect(authServiceSpy).not.toHaveBeenCalled();
    });
  });

  describe('when reauth 401 is received', () => {
    it('should rethrow error', () => {
      const { testUrl, reauthErrorOpts } = getData();

      httpClient.get<Data>(testUrl).subscribe({
        next: () => fail('should have failed with the 401 error'),
        error: (error) => {
          expect(error.status).toEqual(reauthErrorOpts.status);
          expect(error.statusText).toEqual(reauthErrorOpts.statusText);
        },
      });

      const req = httpMock.expectOne(testUrl);
      req.flush({}, reauthErrorOpts);
      expect(authServiceSpy).not.toHaveBeenCalled();
    });
  });
});
