import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyformPage } from './myform.page';

const routes: Routes = [
  {
    path: '',
    component: MyformPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyformPageRoutingModule {}
