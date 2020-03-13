import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hospitals',
  templateUrl: './hospitals.page.html',
  styleUrls: ['./hospitals.page.scss'],
})
export class HospitalsPage implements OnInit {

  constructor(private router: Router) { }

    homePage() {
        this.router.navigate(['/home']);
    }
  ngOnInit() {
  }

}
