import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RatecontractorPageRoutingModule } from './ratecontractor-routing.module';

import { RatecontractorPage } from './ratecontractor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RatecontractorPageRoutingModule
  ],
  declarations: [RatecontractorPage]
})
export class RatecontractorPageModule {}
