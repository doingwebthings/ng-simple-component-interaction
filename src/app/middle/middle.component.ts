import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-middle',
  template: `
    <h2>outerservice.data in outer.component</h2>
    <ul>
      <li *ngFor="let item of outerData">{{ item }}</li>
    </ul>
    <app-inner></app-inner>
  `,
  styleUrls: ['./middle.component.css']
})
export class MiddleComponent implements OnInit {
  @Input() outerData: any;

  constructor() {
  }

  ngOnInit() {
  }
}
