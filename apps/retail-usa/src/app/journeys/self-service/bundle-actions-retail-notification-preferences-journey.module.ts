import { NgModule, Provider } from '@angular/core';
import {
  ActionsRetailNotificationPreferencesJourneyModule,
  ActionsRetailNotificationPreferencesJourneyConfiguration,
  ActionsRetailNotificationPreferencesJourneyToken,
} from '@backbase/actions-retail-notification-preferences-journey-ang';
import { environment } from '../../../environments/environment';

const apiModeTypeGuard = (value: string) => {
  if (value === 'actions' || value === 'engagements') return value;
  return 'actions';
};

const RetailActionsConfigProvider: Provider = {
  provide: ActionsRetailNotificationPreferencesJourneyToken,
  useValue: {
    notificationDismissTime: 5,
    specificationIDs: '1, 4',
    apiMode: apiModeTypeGuard(environment.notificationPreferencesApiMode),
  } as ActionsRetailNotificationPreferencesJourneyConfiguration,
};

@NgModule({
  imports: [ActionsRetailNotificationPreferencesJourneyModule.forRoot()],
  providers: [RetailActionsConfigProvider],
})
export class ActionsRetailNotificationPreferencesJourneyBundleModule {}
