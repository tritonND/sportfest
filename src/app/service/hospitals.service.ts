import { Injectable } from '@angular/core';
import {Hospitals} from '../model/hospitals';

@Injectable({
  providedIn: 'root'
})
export class HospitalsService {
  private hospitals = [];
  private hospital: Hospitals;

  constructor() { }
  gethospital() {
    return this.hospital;
  }
  sethospital(data) {
     this.hospital = data;
  }
  gethospitals() {
    return this.hospitals;
  }
  sethospitals(data) {
    this.hospitals = data;
  }
}
