import { TestBed } from '@angular/core/testing';
import { MessagesClientInboxJourneyBundleModule } from './bundle-messages-client-inbox-journey-bundle.module';

describe('MessagesClientInboxJourneyBundleModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MessagesClientInboxJourneyBundleModule],
    });
  });

  it('initializes', () => {
    const module = TestBed.inject(MessagesClientInboxJourneyBundleModule);
    expect(module).toBeTruthy();
  });
});
