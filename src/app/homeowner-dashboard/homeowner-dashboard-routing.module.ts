import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeownerDashboardPage } from './homeowner-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: HomeownerDashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeownerDashboardPageRoutingModule {}
