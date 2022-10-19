import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchprojectPageRoutingModule } from './searchproject-routing.module';

import { SearchprojectPage } from './searchproject.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchprojectPageRoutingModule
  ],
  declarations: [SearchprojectPage]
})
export class SearchprojectPageModule {}
