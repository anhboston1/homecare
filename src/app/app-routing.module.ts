import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'postproject',
    loadChildren: () => import('./homeowner/postproject/postproject.module').then( m => m.PostprojectPageModule)
  },
  {
    path: 'projectlist',
    loadChildren: () => import('./homeowner/projectlist/projectlist.module').then( m => m.ProjectlistPageModule)
  },
  {
    path: 'projectbids',
    loadChildren: () => import('./homeowner/projectbids/projectbids.module').then( m => m.ProjectbidsPageModule)
  },
  {
    path: 'ratecontractor',
    loadChildren: () => import('./homeowner/ratecontractor/ratecontractor.module').then( m => m.RatecontractorPageModule)
  },
  {
    path: 'searchproject',
    loadChildren: () => import('./contractor/searchproject/searchproject.module').then( m => m.SearchprojectPageModule)
  },
  {
    path: 'bidproject',
    loadChildren: () => import('./contractor/bidproject/bidproject.module').then( m => m.BidprojectPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./contractor/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
