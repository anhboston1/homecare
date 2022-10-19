import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchprojectPage } from './searchproject.page';

const routes: Routes = [
  {
    path: '',
    component: SearchprojectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchprojectPageRoutingModule {}
