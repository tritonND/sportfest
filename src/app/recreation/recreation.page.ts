import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-recreation',
  templateUrl: './recreation.page.html',
  styleUrls: ['./recreation.page.scss'],
})
export class RecreationPage implements OnInit {

  constructor(private router: Router) { }

    homePage() {
        this.router.navigate(['/home']);
    }
  ngOnInit() {
  }

}
