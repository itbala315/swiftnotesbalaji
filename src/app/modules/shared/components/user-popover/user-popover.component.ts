import { Component, Input } from '@angular/core';
import { User } from '../../../shared-types';

@Component({
  selector: 'app-user-popover',
  templateUrl: './user-popover.component.html',
  styleUrls: ['./user-popover.component.scss'],
})
export class UserPopoverComponent {
  @Input() user: Partial<User> = {};
}
