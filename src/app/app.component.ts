import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FCM } from '@ionic-native/fcm/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
   backButtonSubscription;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private fcm: FCM,
    private screenOrientation: ScreenOrientation,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      console.log(this.screenOrientation.type); // logs the current orientation, example: 'landscape'

// set to landscape
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);


      console.log('My route', this.router.getCurrentNavigation().id);
      console.log('My route', this.router.url);
      if (this.router.url == '/home' || this.router.url == '') {
            this.backButtonSubscription = this.platform.backButton.subscribe(() => {
                navigator['app'].exitApp();
            });
        }
      console.log('I got here');
        // get FCM token
      // this.fcm.getToken().then(token => {
      //       console.log('This is fcm token - ', token);
      //   });

        // ionic push notification example
      // this.fcm.onNotification().subscribe(data => {
      //       console.log(data);
      //       if (data.wasTapped) {
      //           console.log('Received in background');
      //       } else {
      //           console.log('Received in foreground');
      //       }
      //   });

        // refresh the FCM token
      // this.fcm.onTokenRefresh().subscribe(token => {
      //       console.log(token);
      //   });

    });
  }
}
