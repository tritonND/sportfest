import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { HospitalsService } from '../service/hospitals.service';

@Component({
  selector: 'app-hospitals',
  templateUrl: './hospitals.page.html',
  styleUrls: ['./hospitals.page.scss'],
})
export class HospitalsPage implements OnInit {
  hospitalData = [];
  constructor(private router: Router, private hospitalService: HospitalsService) {
      fetch('./assets/data/hospital.json').then(res => res.json())
          .then(data => {
              this.hospitalData = data.hospitals;
              this.hospitalService.sethospitals(this.hospitalData);
              console.log(data.hospitals);
              console.log(data);
          });
      if (this.router.getCurrentNavigation().extras.state) {
          this.hospitalData = [this.router.getCurrentNavigation().extras.state];
      }
  }

    homePage() {
        this.router.navigate(['/home']);
    }
    getClinicDetails(hospital) {
        const navExtras: NavigationExtras = {
            state: {
                dhospital: hospital
            }
        };
        // this.eventService.setEvent(event);
        this.router.navigate(['/hospitals-details'], navExtras);
    }
  ngOnInit() {
  }

}
