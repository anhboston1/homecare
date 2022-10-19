import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProjectbidsPageRoutingModule } from './projectbids-routing.module';

import { ProjectbidsPage } from './projectbids.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProjectbidsPageRoutingModule
  ],
  declarations: [ProjectbidsPage]
})
export class ProjectbidsPageModule {}
