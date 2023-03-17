import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from '../../../shared';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() isMobileMainMenuOpen: boolean = false;
  @Output() showSidebar = new EventEmitter<boolean>();

  searchPanel: boolean = false;
  isMobileSubMenuOpen: boolean = false;
  isDark: boolean = true;
  open: boolean = false;
  searchStr: string = '';

  constructor(public userService: UserService) {}

  public openMenu(): void {
    this.isMobileMainMenuOpen = !this.isMobileMainMenuOpen;

    this.showSidebar.emit(this.isMobileMainMenuOpen);
  }

  toggleTheme(): void {
    this.isDark = !this.isDark;
  }
  openNotificationsPanel(): void {}
  toggleSearchPanel(): void {
    this.searchPanel = !this.searchPanel;
  }
  openSettingsPanel(): void {}
}
