import { TestBed } from '@angular/core/testing';
import { SelfServiceJourneyBundleModule } from './bundle-profile-journey.module';

describe('SelfServiceJourneyBundleModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SelfServiceJourneyBundleModule],
    });
  });

  it('initializes', () => {
    const module = TestBed.inject(SelfServiceJourneyBundleModule);
    expect(module).toBeTruthy();
  });
});
