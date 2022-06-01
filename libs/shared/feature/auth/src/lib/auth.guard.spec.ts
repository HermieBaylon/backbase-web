import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { OAuthService } from 'angular-oauth2-oidc';
import { AuthGuard } from './auth.guard';

describe('Guard', () => {
  let oAuthService: OAuthService;
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        {
          provide: OAuthService,
          useValue: {
            hasValidAccessToken: () => {
              return true;
            },
          },
        },
      ],
    });
  });

  it('Should return true when there is valid token', () => {
    guard = TestBed.inject(AuthGuard);
    oAuthService = TestBed.inject(OAuthService);
    expect(guard.canActivate()).toBe(true);
  });

  it('Should return true when there is not valid token', () => {
    TestBed.overrideProvider(OAuthService, {
      useValue: {
        hasValidAccessToken: () => {
          return false;
        },
        initLoginFlow: () => {
          return true;
        },
      },
    });
    guard = TestBed.inject(AuthGuard);
    oAuthService = TestBed.inject(OAuthService);
    expect(guard.canActivate()).toBe(false);
  });
  it('Should return true when there is not valid token', () => {
    guard = TestBed.inject(AuthGuard);
    const bool = guard.canActivateChild();
    expect(bool).toBe(true);
  });
});
