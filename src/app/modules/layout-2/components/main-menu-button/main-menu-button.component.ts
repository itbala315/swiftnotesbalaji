import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-main-menu-button',
  templateUrl: './main-menu-button.component.html',
  styleUrls: ['./main-menu-button.component.scss'],
})
export class MainMenuButtonComponent {
  @Input() menuOpen: boolean = false;
  @Output() menu: EventEmitter<boolean> = new EventEmitter();

  openMenu(): void {
    this.menuOpen = !this.menuOpen;
    this.menu.emit(this.menuOpen);
  }
}
