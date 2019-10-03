import { Component, OnInit } from '@angular/core';
import {VERSION} from '@angular/material';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  version = VERSION;
  mode = 'side'
  opened = true;
  layoutGap = '64';
  fixedInViewport = true;
  constructor() { }

  ngOnInit() {
  }

}
