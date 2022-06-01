import { TestBed } from '@angular/core/testing';
import { ActionsRetailNotificationPreferencesJourneyBundleModule } from './bundle-actions-retail-notification-preferences-journey.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule, EffectsRootModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
describe('ActionsRetailNotificationPreferencesJourneyBundleModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [
        ActionsRetailNotificationPreferencesJourneyBundleModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        HttpClientModule,
      ],
    });
  });

  it('initializes', () => {
    const module = TestBed.inject(ActionsRetailNotificationPreferencesJourneyBundleModule);
    expect(module).toBeTruthy();
  });
});
