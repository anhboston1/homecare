import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RatecontractorPage } from './ratecontractor.page';

const routes: Routes = [
  {
    path: '',
    component: RatecontractorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RatecontractorPageRoutingModule {}
