import { TestBed } from '@angular/core/testing';
import { ContactManagerJourneyBundleModule } from './bundle-contact-journey.module';

describe('ContactManagerJourneyBundleModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ContactManagerJourneyBundleModule],
    });
  });

  it('initializes', () => {
    const module = TestBed.inject(ContactManagerJourneyBundleModule);
    expect(module).toBeTruthy();
  });
});
