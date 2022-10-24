import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BidprojectPageRoutingModule } from './bidproject-routing.module';

import { BidprojectPage } from './bidproject.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BidprojectPageRoutingModule
  ],
  declarations: [BidprojectPage]
})
export class BidprojectPageModule {}
