import { TestBed } from '@angular/core/testing';
import { cashAdvancePaymentTypeConfig } from './initiate-payment-cash-advance-type';

describe('cashAdvancePaymentTypeConfig', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
    });
  });

  it('should set Config', () => {
    const control = {
      value: {
        amoutnt: 10,
      },
      root: {
        get: () => {},
      },
    };
    expect(cashAdvancePaymentTypeConfig.fields[2]['fields'][0]['options']['asyncValidators'][0](control)).toBeDefined();
    expect(cashAdvancePaymentTypeConfig.fields[0]).toBeDefined();
    expect(cashAdvancePaymentTypeConfig.fields[1]).toBeDefined();
    expect(cashAdvancePaymentTypeConfig.fields[2]).toBeDefined();
    expect(cashAdvancePaymentTypeConfig.fields[3]).toBeDefined();
  });
});
