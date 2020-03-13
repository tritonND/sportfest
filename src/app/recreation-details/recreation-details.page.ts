import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import {ActivatedRoute, Router, NavigationExtras} from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import {Recreation} from '../model/recreation';
import { RecreationService } from '../service/recreation.service';

@Component({
  selector: 'app-recreation-details',
  templateUrl: './recreation-details.page.html',
  styleUrls: ['./recreation-details.page.scss'],
})
export class RecreationDetailsPage implements AfterViewInit {
    @ViewChild('map', {static: true}) mapRef: ElementRef;
    lat: any;
    lng: any;
    destlat: any;
    destlng: any;
    map: any;
    mydata: any;
    params: any;
    recreationName: any;
    recreationAddress: any;
    recreationDescription: any;
    recreation = {} as Recreation;
    constructor( private router: Router, private recreationService: RecreationService, private routes: ActivatedRoute,
                 private geolocation: Geolocation) {}

    recreationPage() {
        this.router.navigate(['/recreation']);
    }

    ngAfterViewInit() {
        console.log(this.mapRef);
        this.routes.params.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.mydata = this.router.getCurrentNavigation().extras.state;
                this.destlat = this.mydata.dplace.latitude;
                this.destlng = this.mydata.dplace.longitude;
                this.recreationName = this.mydata.dplace.name;
                this.recreationAddress = this.mydata.dplace.address;
                this.recreationDescription = this.mydata.dplace.description;
            }
        });
        this.recreation = this.recreationService.getrecreation();
        console.log(this.recreation);
        this.showMap();
    }
    showMap() {
        this.geolocation.getCurrentPosition().then((resp) => {
            this.lat = resp.coords.latitude;
            this.lng = resp.coords.longitude;


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

        }).catch((error) => {
            console.log('Error getting location', error);
        });


    }

}
