import { Component, Input } from '@angular/core';
import { NavbarItem } from '../../../shared-types';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Input() item: Partial<NavbarItem> = {};
}
