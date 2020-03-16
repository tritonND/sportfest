import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import {ActivatedRoute, Router, NavigationExtras} from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import {Hotels} from '../model/hotels';
import {HotelsService} from '../service/hotels.service';
import { LoadingController } from '@ionic/angular';

declare let google: any;

@Component({
  selector: 'app-hotels-details',
  templateUrl: './hotels-details.page.html',
  styleUrls: ['./hotels-details.page.scss'],
})
export class HotelsDetailsPage implements AfterViewInit {
    @ViewChild('map', {static: true}) mapRef: ElementRef;
    lat: any;
    lng: any;
    destlat: any;
    destlng: any;
    map: any;
    mydata: any;
    params: any;
    hotelName: any;
    hotelCode: any;
    hotelAddress: any;
    hotelDiscountpct: any;
    hotelNumOfRooms: any;
    hotelDiscountRate: any;
    hotelContact: any;
    hotelPhone: any;
    hotel = {} as Hotels;
    constructor( private router: Router, private hotelService: HotelsService, private routes: ActivatedRoute,
                 private geolocation: Geolocation, private loadingCtrl: LoadingController) {}

    hotelPage() {
        this.router.navigate(['/hotels']);
    }

    async displayLoading() {
        const loading = await this.loadingCtrl.create({
            message: 'Getting Direction, Please enable your internet...',
            spinner : 'bubbles',
            duration: 4000
        });
        await loading.present();
    }

    ngAfterViewInit() {
        console.log(this.mapRef);
        this.routes.params.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.mydata = this.router.getCurrentNavigation().extras.state;
                this.destlat = this.mydata.dhotel.latitude;
                this.destlng = this.mydata.dhotel.longitude;
                this.hotelName = this.mydata.dhotel.name;
                this.hotelCode = this.mydata.dhotel.discount_code;
                this.hotelAddress = this.mydata.dhotel.address;
                this.hotelDiscountpct = this.mydata.dhotel.discountpct;
                this.hotelNumOfRooms = this.mydata.dhotel.num_of_rooms;
                this.hotelDiscountRate = this.mydata.dhotel.discountrate;
                this.hotelContact = this.mydata.dhotel.contact_person;
                this.hotelPhone = this.mydata.dhotel.contact_phone;
            }
        });
        this.hotel = this.hotelService.gethotel();
        console.log(this.hotel);
        this.showMap();
    }
    showMap() {
        this.displayLoading();
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
