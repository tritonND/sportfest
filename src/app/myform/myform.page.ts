import { Component, OnInit, AfterViewInit } from '@angular/core';
import { RecreationService } from '../service/recreation.service';
import {HotelsService} from '../service/hotels.service';
import {HospitalsService} from '../service/hospitals.service';
import {EventsService} from '../service/events.service';
import { LoadingController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, tap} from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';



@Component({
  selector: 'app-myform',
  templateUrl: './myform.page.html',
  styleUrls: ['./myform.page.scss'],
})
export class MyformPage implements OnInit, AfterViewInit {
    httpHeader = {
        headers: new HttpHeaders({'Content-type': 'application/json'})
    };
    recreationData = [];
    hotelData = [];
    hospitalData = [];
    eventData = [];
  constructor(private  recreationService: RecreationService,
              private  hotelService: HotelsService,
              private  hospitalService: HospitalsService,
              private  eventService: EventsService,
              public loadingCtrl: LoadingController,
              public toastCtrl: ToastController,
              private httpClient: HttpClient,
              private http: HTTP,
              private router: Router,
              // public toastCtrl: ToastController, public loadingCtrl: LoadingController , private http: Http
  ) {
  //  For recreation Center Data
      fetch('./assets/data/recreation.json').then(res => res.json())
          .then(data => {
              this.recreationData = data.recreation;
              this.recreationService.setrecreation(this.recreationData);
              console.log(data.recreation);
          });

      //  For hospital Data
      fetch('./assets/data/hospital.json').then(res => res.json())
          .then(data => {
              this.hospitalData = data.hospitals;
              this.hospitalService.sethospitals(this.hospitalData);
              console.log(data.hospitals);
          });

      //  For hotel Data
      fetch('./assets/data/hotels.json').then(res => res.json())
          .then(data => {
              this.hotelData = data.hotels;
              this.hotelService.sethotels(this.hotelData);
              console.log(data.hotels);
          });

      //  For events Data
      fetch('./assets/data/events.json').then(res => res.json())
          .then(data => {
              this.eventData = data.events;
              this.eventService.setEvents(this.eventData);
              console.log(data.events);
          });

  }

  ngOnInit() {
  }

    async presentToast() {
     const toast = await this.toastCtrl.create({
         message: 'Incident Report Sent Successfully',
         duration: 4000,
         position: 'middle'
     });
     toast.present();
    }

    async presentToastError() {
        const toast = await this.toastCtrl.create({
            message: 'Error... Check your internet connection',
            duration: 4000,
            position: 'middle'
        });
        toast.present();
    }
    async sendReport(form) {
        const postData = {
            fullname: form.value.fullname,
            phone: form.value.phone,
            reports: form.value.reports,
            location: form.value.location,
            incidentType: form.value.incidentType,
        };


        const loading = await this.loadingCtrl.create({
            message: 'Sending, Please wait...',
            spinner : 'bubbles'
        });
        await loading.present().then(() => {
            this.http.post('http://132.148.23.19/sportfest/incident.php', postData, this.httpHeader)
                .then(data => {
                    loading.dismiss();
                    form.reset();
                    this.presentToast();
                    this.router.navigate(['/home']);
                })
                .catch(error => {
                    loading.dismiss();
                    this.presentToastError();
                });
        });


    }

    homePage() {
        this.router.navigate(['/home']);
    }

    ngAfterViewInit() {

    }


//     this.httpClient.post('http://132.148.23.19/sportfest/incident.php', postData)
// .subscribe(
//         data => {
//     console.log(data);
//     // console.log(data.status);
//     loading.dismiss();
//     form.reset();
//     this.presentToast();
//     this.router.navigate(['/home']);
// },
// error => {
//     console.log(error);
//     loading.dismiss();
//     this.presentToastError();
// });

}
