import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NavbarItem } from 'src/app/modules/shared-types';
import { UserService } from '../../../shared';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  @Input() menu: boolean = false;
  @Input() location: string = '';
  @Output() menuChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  profileMenu: Partial<NavbarItem>[] = [
    {
      link: '/profile',
      text: 'Your Profile',
    },
    {
      link: '/settings',
      text: 'Settings',
    },
  ];

  constructor(public userService: UserService) {}

  ngOnInit() {
    this.menuChange.emit(this.menu);
  }

  clicked() {
    this.menu = !this.menu;
    this.menuChange.emit(this.menu);
  }
}
