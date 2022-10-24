import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContractorDashboardPage } from './contractor-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: ContractorDashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContractorDashboardPageRoutingModule {}
