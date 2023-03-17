import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-theme-button',
  templateUrl: './theme-button.component.html',
  styleUrls: ['./theme-button.component.scss'],
})
export class ThemeButtonComponent {
  @Input() isDark: boolean = false;
  @Output() isDarkChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  toggle() {
    this.isDark = !this.isDark;
    console.log('isDark:', this.isDark);
    this.isDarkChange.emit(this.isDark);
  }
}
