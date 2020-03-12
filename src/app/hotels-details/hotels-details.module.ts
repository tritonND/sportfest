import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HotelsDetailsPageRoutingModule } from './hotels-details-routing.module';

import { HotelsDetailsPage } from './hotels-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HotelsDetailsPageRoutingModule
  ],
  declarations: [HotelsDetailsPage]
})
export class HotelsDetailsPageModule {}
