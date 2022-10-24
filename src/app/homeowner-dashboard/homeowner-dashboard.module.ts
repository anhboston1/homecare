import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeownerDashboardPageRoutingModule } from './homeowner-dashboard-routing.module';

import { HomeownerDashboardPage } from './homeowner-dashboard.page';
import { PostprojectPipe } from './postproject.pipe';
import { ProjectlistPipe } from './projectlist.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeownerDashboardPageRoutingModule
  ],
  declarations: [HomeownerDashboardPage, PostprojectPipe, ProjectlistPipe]
})
export class HomeownerDashboardPageModule {}
