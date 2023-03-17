import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header-button',
  templateUrl: './header-button.component.html',
  styleUrls: ['./header-button.component.scss'],
})
export class HeaderButtonComponent {
  @Output() clicked: EventEmitter<boolean> = new EventEmitter<boolean>();
}
