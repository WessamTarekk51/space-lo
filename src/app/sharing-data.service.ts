import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharingDataService {
  index: number = -1;
  homeButton: boolean = false
  constructor() { }
  getIndex() {
    return this.index
  }

  setIndex(index: number) {
    this.index = index
  }



}
