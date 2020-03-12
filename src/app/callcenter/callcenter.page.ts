import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-callcenter',
  templateUrl: './callcenter.page.html',
  styleUrls: ['./callcenter.page.scss'],
})
export class CallcenterPage implements OnInit {

  constructor() { }
    slideOpts = {
        initialSlide: 1,
        speed: 400
    };

  ngOnInit() {
  }

}
