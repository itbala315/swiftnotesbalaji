import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-layout-2',
  templateUrl: './layout-2.component.html',
  styleUrls: ['./layout-2.component.scss'],
})
export class Layout2Component implements OnInit {
  public showSidebar: boolean = false;

  constructor() {}

  ngOnInit() {}
}
