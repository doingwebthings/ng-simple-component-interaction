import {Component, OnInit} from '@angular/core';
import {OuterService} from '../outer.service';

@Component({
  selector: 'app-inner',
  template: `
    <div style="background-color: lightpink; padding: 1rem;">
      <button (click)="changeOuterData()" style="padding: 10px; font-size: 18px">Inner Button: change data in OuterService... is it
        reactive?
      </button>
    </div>
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
