import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchprojectsPage } from './searchprojects.page';

const routes: Routes = [
  {
    path: '',
    component: SearchprojectsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchprojectsPageRoutingModule {}
