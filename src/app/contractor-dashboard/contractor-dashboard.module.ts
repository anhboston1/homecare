import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContractorDashboardPageRoutingModule } from './contractor-dashboard-routing.module';

import { ContractorDashboardPage } from './contractor-dashboard.page';
import { BidprojectPipe } from './bidproject.pipe';
import { SearchprojectPipe } from './searchproject.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContractorDashboardPageRoutingModule
  ],
  declarations: [ContractorDashboardPage, BidprojectPipe, SearchprojectPipe]
})
export class ContractorDashboardPageModule {}
