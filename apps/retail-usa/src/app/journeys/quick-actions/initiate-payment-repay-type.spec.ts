import { TestBed } from '@angular/core/testing';
import { repayPaymentTypeConfig } from './initiate-payment-repay-type';

describe('repayPaymentTypeConfig', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
    });
  });

  it('should set Config', () => {
    expect(
      JSON.stringify(repayPaymentTypeConfig.fields[0]['fields'][0]['options']['activateDependantsOn']()),
    ).toBeDefined();
    expect(repayPaymentTypeConfig.fields[0]).toBeDefined();
    expect(repayPaymentTypeConfig.fields[1]).toBeDefined();
    expect(repayPaymentTypeConfig.fields[2]).toBeDefined();
    expect(repayPaymentTypeConfig.fields[3]).toBeDefined();
  });
});
