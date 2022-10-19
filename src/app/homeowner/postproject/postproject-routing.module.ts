import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostprojectPage } from './postproject.page';

const routes: Routes = [
  {
    path: '',
    component: PostprojectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostprojectPageRoutingModule {}
