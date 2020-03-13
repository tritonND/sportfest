import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecreationPageRoutingModule } from './recreation-routing.module';

import { RecreationPage } from './recreation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecreationPageRoutingModule
  ],
  declarations: [RecreationPage]
})
export class RecreationPageModule {}
