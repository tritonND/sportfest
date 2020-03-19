import {Component, AfterViewInit, OnDestroy, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { Push, PushObject, PushOptions } from '@ionic-native/push/ngx';
import { Firebase } from '@ionic-native/firebase/ngx';

import {
    Plugins,
    PushNotification,
    PushNotificationToken,
    PushNotificationActionPerformed } from '@capacitor/core';

const { PushNotifications, Network } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit, OnDestroy, OnInit {
    backButtonSubscription;
  constructor(private router: Router, private platform: Platform, private push: Push,
              private firebase: Firebase) {}

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
        this.router.navigate(['/hospitals']);
    }

    showTourist() {
        this.router.navigate(['/recreation']);
    }

    showIncidence() {
        this.router.navigate(['/myform']);
    }

    ngAfterViewInit() {
        PushNotifications.register();

        PushNotifications.addListener('registration',
            (token: PushNotificationToken) => {
                console.log('Push registration success, token: ' + token.value);
                // alert('Push registration success, token: ' + token.value);
            }
        );

        PushNotifications.addListener('registrationError',
            (error: any) => {
                console.log('Error on registration: ' + JSON.stringify(error));
                // alert('Error on registration: ' + JSON.stringify(error));
            }
        );
        PushNotifications.addListener('pushNotificationReceived',
            (notification: PushNotification) => {
                console.log('Push received: ' + JSON.stringify(notification));
                // alert('Push received: ' + JSON.stringify(notification));
            }
        );

        PushNotifications.addListener('pushNotificationActionPerformed',
            (notification: PushNotificationActionPerformed) => {
                console.log('Push action performed: ' + JSON.stringify(notification));
                // alert('Push action performed: ' + JSON.stringify(notification));
                // http://www.nsfedo2020.com/wp-content/uploads/2019/10/mascot-nsf-300x272.png
            }
        );
       }
    ngOnInit() {  }

    ngOnDestroy() {
        // this.backButtonSubscription.unsubscribe();
    }

}
