import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AccountsTransactionsJourneyBundleModule } from './wrapper-accounts-transactions-journey.module';

describe('AccountsTransactionsJourneyBundleModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AccountsTransactionsJourneyBundleModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        HttpClientModule,
      ],
    });
  });

  it('initializes', () => {
    const module = TestBed.inject(AccountsTransactionsJourneyBundleModule);
    expect(module).toBeTruthy();
  });
});
