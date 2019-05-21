import {Component, OnInit} from '@angular/core';
import {OuterService} from '../outer.service';

@Component({
  selector: 'app-outer',
  template: `
    <div style="border:1px solid #ccc;padding:1rem; background-color: lightgoldenrodyellow">
      <h2>I´m the outer-component.</h2>
      <p>
        I use a service called OuterService. OuterService gives me some data
        that I can display as a list in the middle-component.
      </p>
      <div>
        <h3>innerData in outer.component</h3>
        <ul>
          <li *ngFor="let item of data">{{ item }}</li>
        </ul>
      </div>
      <div>
        <h3>outerservice.data in outer.component</h3>
        <ul>
          <li *ngFor="let item of outerService.data">{{ item }}</li>
        </ul>
      </div>
        <app-middle [outerData]="outerService.data"></app-middle>
    </div>
  `,
  styles: ['h1 { font-weight: normal; }']
})
export class OuterComponent implements OnInit {

  private data = [1, 2, 3];
  constructor(public outerService: OuterService) {

  }

  ngOnInit() {
  }
}
