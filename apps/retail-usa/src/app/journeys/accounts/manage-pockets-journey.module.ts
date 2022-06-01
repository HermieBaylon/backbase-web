import { NgModule } from '@angular/core';
import {
  ManagePocketsJourneyConfigurationToken,
  ManagePocketsJourneyModule,
} from '@backbase/manage-pockets-journey-ang';

@NgModule({
  imports: [ManagePocketsJourneyModule.forRoot()],
  providers: [
    {
      provide: ManagePocketsJourneyConfigurationToken,
      useValue: {
        journeyCurrency: 'USD',
      },
    },
  ],
})
export class ManagePocketsJourneyBundleModule {}
