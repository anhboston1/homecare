import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostprojectPageRoutingModule } from './postproject-routing.module';

import { PostprojectPage } from './postproject.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostprojectPageRoutingModule
  ],
  declarations: [PostprojectPage]
})
export class PostprojectPageModule {}
