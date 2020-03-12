import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

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
        this.router.navigate(['/events']);
    }

    showTourist() {
        this.router.navigate(['/events']);
    }

}
