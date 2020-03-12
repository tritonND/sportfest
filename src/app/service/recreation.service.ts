import { Injectable } from '@angular/core';
import { Recreation } from '../model/recreation';

@Injectable({
  providedIn: 'root'
})
export class RecreationService {
  private recreations = [];
  private recreation: Recreation;
  constructor() { }
  getrecreation() {
    return this.recreation;
  }
  setrecreation(data) {
    this.recreation = data;
  }
  getrecreations() {
    return this.recreations;
  }
  setrecreations(data) {
      this.recreations = data;
  }
}
