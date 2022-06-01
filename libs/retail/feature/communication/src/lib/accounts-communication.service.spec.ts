import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AccountsCommunicationService } from './accounts-communication.service';

describe('AccountCommunicationService', () => {
  let service: AccountsCommunicationService;
  let router: Router;
  let activatedRoute: ActivatedRoute;
  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
    });
    router = TestBed.inject(Router);
    activatedRoute = TestBed.inject(ActivatedRoute);
    service = TestBed.inject(AccountsCommunicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call navigateToLoansInfoPage', () => {
    const navigateSpy = spyOn(router, 'navigate');
    service.navigateToExternalAccountDetails({ id: '1', kind: 'loan' });
    expect(navigateSpy).toHaveBeenCalledWith(['my-accounts/loans/details/1/info'], { relativeTo: activatedRoute });
  });

  it('should return error', () => {
    const navigateSpy = spyOn(router, 'navigate');
    service.navigateToExternalAccountDetails({ id: '1', kind: 'test' });
    expect(navigateSpy).not.toHaveBeenCalledWith(['loans/details/1/info'], { relativeTo: activatedRoute });
  });
});
