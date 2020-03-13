import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecreationPage } from './recreation.page';

const routes: Routes = [
  {
    path: '',
    component: RecreationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecreationPageRoutingModule {}
