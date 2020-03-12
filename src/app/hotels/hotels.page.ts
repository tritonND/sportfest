import { Component, OnInit } from '@angular/core';
import {HotelsService} from '../service/hotels.service';
import { Router, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.page.html',
  styleUrls: ['./hotels.page.scss'],
})
export class HotelsPage implements OnInit {
    hotelData = [];
    constructor(private router: Router, private hotelService: HotelsService) {
        fetch('./assets/data/hotels.json').then(res => res.json())
            .then(data => {
                this.hotelData = data.hotels;
                this.hotelService.sethotels(this.hotelData);
                console.log(data.hotels);
            });
        if (this.router.getCurrentNavigation().extras.state) {
            this.hotelData = [this.router.getCurrentNavigation().extras.state];
        }
    }
    homePage() {
        this.router.navigate(['/home']);
    }
    getHotelDetails(hotel) {
        const navExtras: NavigationExtras = {
            state: {
                dhotel: hotel
            }
        };
        // this.eventService.setEvent(event);
        this.router.navigate(['/hotels-details'], navExtras);
    }

  ngOnInit() {
  }

}
