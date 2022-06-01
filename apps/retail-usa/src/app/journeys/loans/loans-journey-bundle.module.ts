import { NgModule } from '@angular/core';

import { LoansJourneyModule } from '@backbase/retail-loans-journey-ang';

@NgModule({
  imports: [LoansJourneyModule.forRoot()],
})
export class LoansJourneyBundleModule {}
