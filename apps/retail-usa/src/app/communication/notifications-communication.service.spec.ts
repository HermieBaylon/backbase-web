import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { NotificationsCommunication } from './notifications-communication.service';

describe('NotificationsCommunication', () => {
  let service: NotificationsCommunication;
  let router: Router;
  let activatedRoute: ActivatedRoute;
  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
    });
    router = TestBed.inject(Router);
    activatedRoute = TestBed.inject(ActivatedRoute);
    service = TestBed.inject(NotificationsCommunication);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should open NotificationSettings', () => {
    const navigateSpy = spyOn(router, 'navigate');
    service.openNotificationSettings();
    expect(navigateSpy).toHaveBeenCalledWith(['/self-service/product-list/manage-notifications']);
  });

  it('should navigate notification', () => {
    const navigateSpy = spyOn(router, 'navigate');
    const routing = {
      data: {
        arrangementId: 1,
        id: 2,
      },
      'where-to': 'conversation-view',
    };
    service.notificationNavigation(routing);
    expect(navigateSpy).toHaveBeenCalledWith(['/more/messages/inbox/conversation', { id: 2 }]);
  });

  it('should open NotificationSettings', () => {
    const navigateSpy = spyOn(router, 'navigate');
    service.openNotificationSettings();
    expect(navigateSpy).toHaveBeenCalledWith(['/self-service/product-list/manage-notifications']);
  });

  it('should navigate notification transaction-view', () => {
    const navigateSpy = spyOn(router, 'navigate');
    const routing = {
      data: {
        arrangementId: 1,
        id: 2,
      },
      'where-to': 'transaction-view',
    };
    service.notificationNavigation(routing);
    expect(navigateSpy).toHaveBeenCalledWith([
      '/my-accounts/transactions',
      { selectedAccount: 1 },
      'list',
      'detail',
      { transactionId: 2 },
    ]);
  });

  it('should navigate notification transaction-view', () => {
    const navigateSpy = spyOn(router, 'navigate');
    const routing = {
      data: {
        arrangementId: 1,
        id: 2,
      },
      'where-to': 'arrangement-view',
    };
    service.notificationNavigation(routing);
    expect(navigateSpy).toHaveBeenCalledWith(['/my-accounts/transactions', { selectedAccount: 2 }, 'details']);
  });

  it('should return cnsole error', () => {
    const consoleError = spyOn(console, 'warn');
    const routing = {
      data: {
        arrangementId: 1,
        id: 2,
      },
      'where-to': 'a',
    };
    service.notificationNavigation(routing);
    expect(consoleError).toHaveBeenCalled();
  });
});
