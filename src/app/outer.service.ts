import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OuterService {
  public data: any;

  constructor() {
    this.data = [4, 5, 6];
  }
}
