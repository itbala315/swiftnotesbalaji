import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../../menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  menuOpen: boolean = false;
  constructor(public menu: MenuService) {}
}
