import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
import {Router} from '@angular/router';

@Component({
  selector: 'app-callcenter',
  templateUrl: './callcenter.page.html',
  styleUrls: ['./callcenter.page.scss'],
})
export class CallcenterPage implements OnInit {

  constructor(private callNumber: CallNumber, private router: Router) { }

  ngOnInit() {
  }
  callAgent(phoneNum) {
      this.callNumber.callNumber(phoneNum, true)
          .then(res => console.log('Launched dialer!', res))
          .catch(err => console.log('Error launching dialer', err));
  }

    homePage() {
        this.router.navigate(['/home']);
    }

}
