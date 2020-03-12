import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import {ActivatedRoute, Router, NavigationExtras} from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Events} from '../model/events';
import { EventsService } from '../service/events.service';
declare let google: any;
@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.page.html',
  styleUrls: ['./event-details.page.scss'],
})
export class EventDetailsPage implements AfterViewInit {
    @ViewChild('map', {static: true}) mapRef: ElementRef;
    lat: any;
    lng: any;
    destlat: any;
    destlng: any;
    map: any;
    mydata: any;
    params: any;
    eventName: any;
    eventCode: any;
    eventDays: any;
    eventVenue: any;
    event = {} as Events;
  constructor( private router: Router, private eventService: EventsService, private routes: ActivatedRoute,
               private geolocation: Geolocation) {}

    eventPage() {
        this.router.navigate(['/events']);
    }

    ngAfterViewInit() {
        console.log(this.mapRef);
        console.log('I got here ng');
        this.routes.params.subscribe(params => {
            // console.log('this is params con - ', params);
            if (this.router.getCurrentNavigation().extras.state) {
                this.mydata = this.router.getCurrentNavigation().extras.state;
                console.log('this is d event ', this.mydata.devent);
                console.log('this is d event ', this.mydata.devent.name);
                console.log('this is d event ', this.mydata.devent.state);
                this.destlat = this.mydata.devent.latitude;
                this.destlng = this.mydata.devent.longitude;
                this.eventName = this.mydata.devent.name;
                this.eventCode = this.mydata.devent.code;
                this.eventDays = this.mydata.devent.event_days;
                this.eventVenue = this.mydata.devent.venue;
                console.log('This is dest lat', this.destlng);
            }
        });
        this.event = this.eventService.getEvent();
        console.log(this.event);
        this.showMap();
  }
    showMap() {
        this.geolocation.getCurrentPosition().then((resp) => {
            console.log(resp.coords.latitude);
            console.log(resp.coords.longitude);
            this.lat = resp.coords.latitude;
            this.lng = resp.coords.longitude;
            console.log('My Latitude', this.lat);
            console.log('This is dest lat in show map', this.destlng);

            const directionsService = new google.maps.DirectionsService();
            const directionsRenderer = new google.maps.DirectionsRenderer();

            const options = {
                center : {
                    lat : this.lat,
                    lng : this.lng
                },
                zoom: 10,
                mapTypeId: 'roadmap'
            };

            const request = {
                origin: {
                    lat : this.lat,
                    lng : this.lng
                },
                destination: {
                    lat : this.destlat,
                    lng : this.destlng
                },

                travelMode: google.maps.TravelMode.DRIVING
            };

            directionsService.route(request, (response, status) => {
                if (status === 'OK') {
                    console.log(response);
                    directionsRenderer.setDirections(response);
                }
            });

            this.map = new google.maps.Map(this.mapRef.nativeElement, options);

            directionsRenderer.setMap(this.map);

            console.log(this.map);
            // console.log(options);


        }).catch((error) => {
            console.log('Error getting location', error);
        });


    }

}
