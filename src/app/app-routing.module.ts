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
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
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
    path: 'bidproject',
    loadChildren: () => import('./contractor/bidproject/bidproject.module').then( m => m.BidprojectPageModule)
  },
  {
    path: 'searchprojects',
    loadChildren: () => import('./contractor/searchprojects/searchprojects.module').then( m => m.SearchprojectsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
