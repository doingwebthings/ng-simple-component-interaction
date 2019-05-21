import {Component, OnInit} from '@angular/core';
import {OuterService} from '../outer.service';

@Component({
  selector: 'app-outer',
  template: `
    <div class="outer">
      <h1>I´m the outer-component.</h1>
      <p>
        I use a service called OuterService. OuterService gives me some data
        that I can display as a list in the middle-component.
      </p>
      <div>
        <h2>innerData in outer.component</h2>
        <ul>
          <li *ngFor="let item of data">{{ item }}</li>
        </ul>
      </div>
      <div>
        <h2>outerservice.data in outer.component</h2>
        <ul>
          <li *ngFor="let item of outerService.data">{{ item }}</li>
        </ul>
      </div>
    </div>
    <hr>
    <div>
      <h2>I am the middle-component</h2>
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
