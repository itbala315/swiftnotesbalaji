import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  Router,
  NavigationEnd,
  Event as NavigationEvent,
} from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { UserService } from '../../../shared';
import { NavbarItem } from '../../../shared-types';

@Component({
  selector: 'app-layout',
  templateUrl: './layout-1.component.html',
  styleUrls: ['./layout-1.component.scss'],
})
export class Layout1Component implements OnInit, OnDestroy {
  isList: number | undefined;
  isMenu: boolean = false;
  isSearch: boolean = false;
  location: string = '';

  _userMenu: boolean = false;
  public set userMenu(value: boolean) {
    if (value) {
      this.isMenu = false;
    }
    this._userMenu = value;
  }
  public get userMenu() {
    return this._userMenu;
  }

  menuItems: Partial<NavbarItem>[] = [
    {
      link: '/course',
      icon: 'inventory',
      text: 'Courses',
    },
    {
      link: '/mycourses',
      icon: 'list',
      text: 'My Courses',
    },
    {
      link: '/completed',
      icon: 'settings',
      text: 'Completed',
    },
  ];

  min_width: string = '(min-width: 640px)';

  destroy$: Subject<boolean> = new Subject<boolean>();

  searchStr: string = '';

  constructor(
    public userService: UserService,
    private router: Router,
    private observer: BreakpointObserver
  ) {}

  ngOnInit() {
    this.router.events.subscribe((event: NavigationEvent) => {
      if (event instanceof NavigationEnd) {
        this.location = event.url;
      }
    });

    this.observer
      .observe(this.min_width)
      .pipe(takeUntil(this.destroy$))
      .subscribe((result) => {
        result.matches && this.isMenu ? (this.isMenu = false) : this.isMenu;
      });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  isMenuBtn() {
    this.isMenu = !this.isMenu;
    this.userMenu = false;
  }
}
