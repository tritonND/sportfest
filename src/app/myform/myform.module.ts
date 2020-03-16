import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyformPageRoutingModule } from './myform-routing.module';

import { MyformPage } from './myform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyformPageRoutingModule
  ],
  declarations: [MyformPage]
})
export class MyformPageModule {}
