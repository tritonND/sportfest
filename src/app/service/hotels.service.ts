import { Injectable } from '@angular/core';
import { Hotels} from '../model/hotels';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {
  private hotels = [];
  private  hotel: Hotels;
  constructor() { }
  gethotel() {
    return this.hotel;
  }
  sethotel(data) {
    this.hotel = data;
  }
  gethotels() {
    return this.hotels;
  }
  sethotels(data) {
    this.hotels = data;
  }
}
