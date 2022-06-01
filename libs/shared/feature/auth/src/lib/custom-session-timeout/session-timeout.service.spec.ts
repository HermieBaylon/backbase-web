import { HttpClientModule } from '@angular/common/http';
import { NgZone } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { OAuthModule, OAuthService } from 'angular-oauth2-oidc';

import { CustomSessionTimeoutService } from './session-timeout.service';

describe('CustomSessionTimeoutService', () => {
  let service: CustomSessionTimeoutService;
  let injectService: OAuthService;
  let ngZone: NgZone;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule, OAuthModule.forRoot()],
      providers: [OAuthService],
    });
    service = TestBed.inject(CustomSessionTimeoutService);
    injectService = TestBed.inject(OAuthService);
    ngZone = TestBed.inject(NgZone);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('logout', () => {
    const logout = spyOn(injectService, 'revokeTokenAndLogout');
    service.logout();
    expect(logout).toHaveBeenCalled();
  });

  it('registerCountdown', () => {
    const registerCountdown = spyOn(ngZone, 'runOutsideAngular');
    service.registerCountdown(null);
    expect(registerCountdown).toHaveBeenCalled();
  });

  it('refresh', () => {
    const refresh = spyOn(ngZone, 'runOutsideAngular');
    service.refresh();
    expect(refresh).toHaveBeenCalled();
  });

  it('logout', () => {
    const goToLoginPage = spyOn(injectService, 'initLoginFlow');
    service.goToLoginPage();
    expect(goToLoginPage).toHaveBeenCalled();
  });
});
