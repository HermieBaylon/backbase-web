import { TestBed } from '@angular/core/testing';
import { PlacesJourneyBundleModule } from './bundle-places.module';

describe('PlacesJourneyBundleModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PlacesJourneyBundleModule],
    });
  });

  it('initializes', () => {
    const module = TestBed.inject(PlacesJourneyBundleModule);
    expect(module).toBeTruthy();
  });
});
