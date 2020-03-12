import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotelsDetailsPage } from './hotels-details.page';

const routes: Routes = [
  {
    path: '',
    component: HotelsDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotelsDetailsPageRoutingModule {}
