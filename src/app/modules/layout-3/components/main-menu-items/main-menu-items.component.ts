import { Component } from '@angular/core';
import { MenuService } from '../../../menu';

@Component({
  selector: 'app-main-menu-items',
  templateUrl: './main-menu-items.component.html',
  styleUrls: ['./main-menu-items.component.scss'],
})
export class MainMenuItemsComponent {
  constructor(public menu: MenuService) {}
}
