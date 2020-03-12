import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CallcenterPage } from './callcenter.page';

const routes: Routes = [
  {
    path: '',
    component: CallcenterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CallcenterPageRoutingModule {}
