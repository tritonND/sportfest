import { Events } from '../model/events';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
    private events = [];
    private event: Events;
    constructor() { }
    getEvents() {
        return this.events;
    }

    setEvents(data) {
        this.events = data;
    }

    getEvent() {
        return this.event;
    }

    setEvent(data) {
        this.event = data;
    }
}
