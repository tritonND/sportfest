import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { HospitalsService } from '../service/hospitals.service';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import { Hospitals } from '../model/hospitals';

@Component({
  selector: 'app-hospitals-details',
  templateUrl: './hospitals-details.page.html',
  styleUrls: ['./hospitals-details.page.scss'],
})
export class HospitalsDetailsPage implements AfterViewInit {
@ViewChild('map', {static: true}) mapRef: ElementRef;
    lat: any;
    lng: any;
    destlat: any;
    destlng: any;
    map: any;
    mydata: any;
    params: any;
    hospitalName: any;
    hospitalAddress: any;
    hospitalType: any;
    hospital = {} as Hospitals;
    constructor( private router: Router, private hospitalService: HospitalsService, private routes: ActivatedRoute,
                 private geolocation: Geolocation) {}

    hospitalPage() {
        this.router.navigate(['/hospitals']);
    }

    ngAfterViewInit() {
        console.log(this.mapRef);
        this.routes.params.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.mydata = this.router.getCurrentNavigation().extras.state;
                this.destlat = this.mydata.dhospital.latitude;
                this.destlng = this.mydata.dhospital.longitude;
                this.hospitalName = this.mydata.dhospital.name;
                this.hospitalAddress = this.mydata.dhospital.address;
                this.hospitalType = this.mydata.dhospital.type;
            }
        });
        this.hospital = this.hospitalService.gethospital();
        console.log(this.hospital);
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
