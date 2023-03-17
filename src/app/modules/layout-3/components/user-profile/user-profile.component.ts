import { Component } from '@angular/core';
import { MenuService } from '../../../menu';
import { UserService } from '../../../shared';
import { User } from '../../../shared-types';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent {
  menuOpen: boolean = false;

  constructor(public menu: MenuService, public user: UserService) {}

  initials(name: string) {
    let initials = '';

    for (let i = 0; i < name.length; i++) {
      if (name.charAt(i) === ' ') {
        continue;
      }

      if (name.charAt(i) === name.charAt(i).toUpperCase()) {
        initials += name.charAt(i);

        if (initials.length == 2) {
          break;
        }
      }
    }

    return initials;
  }
}
