import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecreationDetailsPage } from './recreation-details.page';

const routes: Routes = [
  {
    path: '',
    component: RecreationDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecreationDetailsPageRoutingModule {}
