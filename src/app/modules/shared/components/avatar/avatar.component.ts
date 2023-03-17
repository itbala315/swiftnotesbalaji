import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../../shared-types';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent implements OnInit {
  @Input() user: Partial<User> = {};
  @Input() hover: boolean = false;

  public initials: string | undefined;

  public isHover: boolean = false;

  private colors = [
    '#EB7181', // red
    '#468547', // green
    '#FFD558', // yellow
    '#3670B2', // blue
  ];

  constructor() {}

  ngOnInit() {
    this.initials = this.createInitials('');
    if (!this.user.color) {
      const randomIndex = Math.floor(
        Math.random() * Math.floor(this.colors.length)
      );
      this.user.color = this.colors[randomIndex];
    }
  }

  public createInitials(name: string): string {
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
