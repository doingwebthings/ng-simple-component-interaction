import {Component, OnInit, Input} from '@angular/core';
import {OuterService} from '../outer.service';

@Component({
  selector: 'app-middle',
  template: `
    <div style="background-color: lightcyan;padding:1rem;">
      <h2>I am the middle-component</h2>
      <h3>data as prop</h3>
      <ul>
        <li *ngFor="let item of outerData">{{ item }}</li>
      </ul>
      <h3>outerservice.data in middle.component</h3>
      <ul>
        <li *ngFor="let item of outerService.data">{{ item }}</li>
      </ul>
      <app-inner></app-inner>
    </div>
  `,
  styleUrls: ['./middle.component.css']
})
export class MiddleComponent implements OnInit {
  @Input() outerData: any;

  constructor(public outerService: OuterService) {
  }

  ngOnInit() {
  }
}
