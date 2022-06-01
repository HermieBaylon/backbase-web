import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { BillpayCommunication } from './billpay-communication.service';

describe('BillpaysCommunicationService', () => {
  let service: BillpayCommunication;
  let router: Router;
  let activatedRoute: ActivatedRoute;
  let navigateSpy;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
    });
    service = TestBed.inject(BillpayCommunication);
    router = TestBed.inject(Router);
    activatedRoute = TestBed.inject(ActivatedRoute);
    navigateSpy = spyOn(router, 'navigate');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should navigate to Recurring Payment', () => {
    service.navigateToRecurringPayment('1');
    expect(navigateSpy).toHaveBeenCalledWith(['billpay/pay-bills'], { relativeTo: activatedRoute.firstChild });
  });

  it('should navigate to OneOff Payment', () => {
    service.navigateToOneOffPayment('1');
    expect(navigateSpy).toHaveBeenCalledWith(['billpay/pay-bills'], { relativeTo: activatedRoute.firstChild });
  });

  it('should navigate Edit Recurring Payment', () => {
    service.navigateToEditRecurringPayment('1');
    expect(navigateSpy).toHaveBeenCalledWith(['billpay/pay-bills/recurring/edit/1'], {
      relativeTo: activatedRoute.firstChild,
    });
  });

  it('should navigate to Edit OneOff Payment', () => {
    service.navigateToEditOneOffPayment('1');
    expect(navigateSpy).toHaveBeenCalledWith(['billpay/pay-bills/one-off/edit/1'], {
      relativeTo: activatedRoute.firstChild,
    });
  });

  it('should navigate to Payments List', () => {
    service.navigateToPaymentsList();
    expect(navigateSpy).toHaveBeenCalledWith(['billpay/pending-bills'], { relativeTo: activatedRoute.firstChild });
  });

  it('should navigate to Payments History', () => {
    service.navigateToPaymentsHistory();
    expect(navigateSpy).toHaveBeenCalledWith(['billpay/history-bills'], { relativeTo: activatedRoute.firstChild });
  });

  it('should navigate to Payees List', () => {
    service.navigateToPayeesList();
    expect(navigateSpy).toHaveBeenCalledWith(['billpay/pay-bills'], { relativeTo: activatedRoute.firstChild });
  });

  it('should navigate to AddPayee', () => {
    service.navigateToAddPayee();
    expect(navigateSpy).toHaveBeenCalledWith(['billpay/manage-payees/payees'], {
      relativeTo: activatedRoute.firstChild,
    });
  });

  it('should navigate to Payee Summary', () => {
    service.navigateToPayeeSummary('1');
    expect(navigateSpy).toHaveBeenCalledWith(['billpay/manage-payees/payee-summary', { payeeID: '1' }], {
      relativeTo: activatedRoute.firstChild,
    });
  });

  it('should navigate to Edit Electronic Payee', () => {
    service.navigateToEditElectronicPayee('1');
    expect(navigateSpy).toHaveBeenCalledWith(['billpay/manage-payees/payees/electronic/edit/1'], {
      relativeTo: activatedRoute.firstChild,
    });
  });

  it('should navigate to Edit Manual Payee', () => {
    service.navigateToEditManualPayee('1');
    expect(navigateSpy).toHaveBeenCalledWith(['billpay/manage-payees/payees/manual/edit/1'], {
      relativeTo: activatedRoute.firstChild,
    });
  });

  it('should navigate to Payveris Ebill Enrol', () => {
    service.navigateToPayverisEbillEnrol('1');
    expect(navigateSpy).toHaveBeenCalledWith(['billpay/manage-payees/ebills', { payeeID: '1' }], {
      relativeTo: activatedRoute.firstChild,
    });
  });

  it('should navigate to Multiple Payments Form', () => {
    service.navigateToMultiplePaymentsForm();
    expect(navigateSpy).toHaveBeenCalledWith(['billpay/pay-bills'], { relativeTo: activatedRoute.firstChild });
  });

  it('should navigate to MainApp Page', () => {
    service.navigateToMainAppPage();
    expect(navigateSpy).toHaveBeenCalledWith(['accounts']);
  });
});
