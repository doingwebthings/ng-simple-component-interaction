import {Component, OnInit} from '@angular/core';
import {OuterService} from '../outer.service';

@Component({
  selector: 'app-inner',
  template: `
    <button (click)="changeOuterData()">Inner Button: change data in OuterService... is it reactive?</button>
  `,
  styleUrls: ['./inner.component.css']
})
export class InnerComponent implements OnInit {

  constructor(public outerService: OuterService) {
  }

  ngOnInit() {
  }

  changeOuterData() {
    this.outerService.data = [7, 8, 9];
  }

}
