import {Component, AfterViewInit, OnDestroy, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit, OnDestroy, OnInit {
    backButtonSubscription;
  constructor(private router: Router, private platform: Platform) {}

  showEvents() {
    this.router.navigate(['/events']);
}
  showCallCenter() {
    this.router.navigate(['/callcenter']);
  }
    showHotels() {
        this.router.navigate(['/hotels']);
    }

    showHospitals() {
        this.router.navigate(['/hospitals']);
    }

    showTourist() {
        this.router.navigate(['/recreation']);
    }

    ngAfterViewInit() {
        console.log('My route', this.router.getCurrentNavigation().id);
        console.log('My route', this.router.url);
        if (this.router.url == '/home' || this.router.url == '') {
           this.backButtonSubscription = this.platform.backButton.subscribe(() => {
               navigator['app'].exitApp();
           });
       }
    }
    ngOnInit() {
        console.log('My route', this.router.getCurrentNavigation().id);
        console.log('My route', this.router.url);
        if (this.router.url == '/home' || this.router.url == '') {
            this.backButtonSubscription = this.platform.backButton.subscribe(() => {
                navigator['app'].exitApp();
            });
        }
    }

    ngOnDestroy() {
        this.backButtonSubscription.unsubscribe();
    }

}
