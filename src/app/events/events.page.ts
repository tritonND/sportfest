import { Component, OnInit, AfterViewInit } from '@angular/core';
import { EventsService } from '../service/events.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {
  eventData = [];
  constructor(private router: Router, private eventService: EventsService) {
      fetch('./assets/data/events.json').then(res => res.json())
          .then(data => {
              this.eventData = data.events;
              this.eventService.setEvents(this.eventData);
              console.log(data.events);
          });
      if (this.router.getCurrentNavigation().extras.state) {
          this.eventData = [this.router.getCurrentNavigation().extras.state];
      }
  }

  // Navigate to home page
  homePage() {
    this.router.navigate(['/home']);
  }

  // Get the details of the event passed or clicked
  getEventDetails(event) {
        const navExtras: NavigationExtras = {
            state: {
                devent: event
            }
        };
        // this.eventService.setEvent(event);
        this.router.navigate(['/event-details'], navExtras);
    }

  ngOnInit() {
  }


}
