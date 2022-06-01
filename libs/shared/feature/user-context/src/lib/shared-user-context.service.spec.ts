import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SharedUserContextService, UserContextConfigurationToken } from './shared-user-context.service';

describe('SharedUserContextService', () => {
  let service: SharedUserContextService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [SharedUserContextService, { provide: UserContextConfigurationToken, useValue: 'test' }],
    });
    service = TestBed.inject(SharedUserContextService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get redirect page', () => {
    const redirectUrl = service.getRedirectPage();
    expect(redirectUrl).toEqual('spa:test');
  });
});
