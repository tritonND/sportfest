import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HospitalsDetailsPageRoutingModule } from './hospitals-details-routing.module';

import { HospitalsDetailsPage } from './hospitals-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HospitalsDetailsPageRoutingModule
  ],
  declarations: [HospitalsDetailsPage]
})
export class HospitalsDetailsPageModule {}
