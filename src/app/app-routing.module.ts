import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'event-details',
    loadChildren: () => import('./event-details/event-details.module').then( m => m.EventDetailsPageModule)
  },
  {
    path: 'events',
    loadChildren: () => import('./events/events.module').then( m => m.EventsPageModule)
  },
  {
    path: 'hotels',
    loadChildren: () => import('./hotels/hotels.module').then( m => m.HotelsPageModule)
  },
  {
    path: 'hotels-details',
    loadChildren: () => import('./hotels-details/hotels-details.module').then( m => m.HotelsDetailsPageModule)
  },
  {
    path: 'callcenter',
    loadChildren: () => import('./callcenter/callcenter.module').then( m => m.CallcenterPageModule)
  },
  {
    path: 'hospitals',
    loadChildren: () => import('./hospitals/hospitals.module').then( m => m.HospitalsPageModule)
  },
  {
    path: 'hospitals-details',
    loadChildren: () => import('./hospitals-details/hospitals-details.module').then( m => m.HospitalsDetailsPageModule)
  },
  {
    path: 'recreation',
    loadChildren: () => import('./recreation/recreation.module').then( m => m.RecreationPageModule)
  },
  {
    path: 'recreation-details',
    loadChildren: () => import('./recreation-details/recreation-details.module').then( m => m.RecreationDetailsPageModule)
  },
  {
    path: 'test',
    loadChildren: () => import('./test/test.module').then( m => m.TestPageModule)
  },
  {
    path: 'test-details',
    loadChildren: () => import('./test-details/test-details.module').then( m => m.TestDetailsPageModule)
  },
  {
    path: 'myform',
    loadChildren: () => import('./myform/myform.module').then( m => m.MyformPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
