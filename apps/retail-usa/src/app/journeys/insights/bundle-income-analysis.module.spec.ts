import { TestBed } from '@angular/core/testing';
import { IncomeAnalysisBundleModule } from './bundle-income-analysis.module';

describe('IncomeAnalysisBundleModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IncomeAnalysisBundleModule],
    });
  });

  it('initializes', () => {
    const module = TestBed.inject(IncomeAnalysisBundleModule);
    expect(module).toBeTruthy();
  });
});
