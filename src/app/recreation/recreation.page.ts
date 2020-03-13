import { Component, OnInit, AfterViewInit } from '@angular/core';
import { RecreationService } from '../service/recreation.service';
import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-recreation',
  templateUrl: './recreation.page.html',
  styleUrls: ['./recreation.page.scss'],
})
export class RecreationPage implements OnInit {
    recreationData = [];
    constructor(private router: Router, private recreationService: RecreationService) {
        fetch('./assets/data/recreation.json').then(res => res.json())
            .then(data => {
                this.recreationData = data.recreation;
                this.recreationService.setrecreation(this.recreationData);
                console.log(data.recreation);
            });
        if (this.router.getCurrentNavigation().extras.state) {
            this.recreationData = [this.router.getCurrentNavigation().extras.state];
        }
    }

    homePage() {
        this.router.navigate(['/home']);
    }
    getRecreationDetails(recreation) {
        const navExtras: NavigationExtras = {
            state: {
                dplace: recreation
            }
        };
        // this.eventService.setEvent(event);
        this.router.navigate(['/recreation-details'], navExtras);
    }
  ngOnInit() {
  }

}
