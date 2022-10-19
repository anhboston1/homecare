import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectbidsPage } from './projectbids.page';

const routes: Routes = [
  {
    path: '',
    component: ProjectbidsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectbidsPageRoutingModule {}
