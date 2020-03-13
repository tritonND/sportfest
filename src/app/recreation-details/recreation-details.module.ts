import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecreationDetailsPageRoutingModule } from './recreation-details-routing.module';

import { RecreationDetailsPage } from './recreation-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecreationDetailsPageRoutingModule
  ],
  declarations: [RecreationDetailsPage]
})
export class RecreationDetailsPageModule {}
