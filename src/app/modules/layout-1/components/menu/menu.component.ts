import { Component, Input } from '@angular/core';
import { NavbarItem } from '../../../shared-types';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  @Input() menu: boolean = false;
  @Input() current: string = '';
  @Input() items: Partial<NavbarItem>[] = [];

  class(link: string): string {
    let classes: string = '';
    if (this.menu) {
      classes += ' block text-base';
    } else {
      classes += ' text-sm';
    }

    if (this.current === link) {
      classes += ' bg-gray-900 text-white hover:bg-gray-700 hover:text-white';
    } else {
      classes += ' text-gray-300 hover:bg-gray-700 hover:text-white';
    }

    return classes;
  }
}
