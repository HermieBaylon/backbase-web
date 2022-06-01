import { TestBed } from '@angular/core/testing';
import { BudgetJourneyBundleModule } from './bundle-budget.module';

describe('BudgetJourneyBundleModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BudgetJourneyBundleModule],
    });
  });

  it('initializes', () => {
    const module = TestBed.inject(BudgetJourneyBundleModule);
    expect(module).toBeTruthy();
  });
});
