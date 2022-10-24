import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchprojectsPageRoutingModule } from './searchprojects-routing.module';

import { SearchprojectsPage } from './searchprojects.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchprojectsPageRoutingModule
  ],
  declarations: [SearchprojectsPage]
})
export class SearchprojectsPageModule {}
