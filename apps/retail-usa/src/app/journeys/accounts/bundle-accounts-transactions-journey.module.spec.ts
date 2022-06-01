import { TestBed } from '@angular/core/testing';
import { AccountsTransactionsJourneyBundleModule } from './bundle-accounts-transactions-journey.module';

describe('AccountsTransactionsJourneyBundleModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AccountsTransactionsJourneyBundleModule],
    });
  });

  it('initializes', () => {
    const module = TestBed.inject(AccountsTransactionsJourneyBundleModule);
    expect(module).toBeTruthy();
  });
});
