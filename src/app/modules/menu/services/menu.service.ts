import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NavbarItem } from '../../shared-types';

@Injectable({ providedIn: 'root' })
export class MenuService {
  // <li>
  //   <a
  //     href="#"
  //     class="
  //       block
  //       py-2
  //       px-4
  //       text-sm text-gray-700
  //       hover:bg-gray-100
  //       dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white
  //     "
  //     >Dashboard</a
  //   >
  // </li>
  // <li>
  //   <a
  //     href="#"
  //     class="
  //       block
  //       py-2
  //       px-4
  //       text-sm text-gray-700
  //       hover:bg-gray-100
  //       dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white
  //     "
  //     >Settings</a
  //   >
  // </li>
  // <li>
  //   <a
  //     href="#"
  //     class="
  //       block
  //       py-2
  //       px-4
  //       text-sm text-gray-700
  //       hover:bg-gray-100
  //       dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white
  //     "
  //     >Earnings</a
  //   >
  // </li>
  // <li>
  //   <a
  //     href="#"
  //     class="
  //       block
  //       py-2
  //       px-4
  //       text-sm text-gray-700
  //       hover:bg-gray-100
  //       dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white
  //     "
  //     >Sign out</a
  //   >
  // </li>

  __profileMenu: Partial<NavbarItem>[] = [
    {
      link: '/profile',
      text: 'Your Profile',
    },
    {
      link: '/settings',
      text: 'Settings',
    },
  ];

  private _profileMenu: BehaviorSubject<Partial<NavbarItem>[]> =
    new BehaviorSubject<Partial<NavbarItem>[]>(null);
  public profileMenu$: Observable<Partial<NavbarItem>[]> =
    this._profileMenu.asObservable();

  __mainMenu: Partial<NavbarItem>[] = [
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

  private _mainMenu: BehaviorSubject<Partial<NavbarItem>[]> =
    new BehaviorSubject<Partial<NavbarItem>[]>(null);
  public mainMenu$: Observable<Partial<NavbarItem>[]> =
    this._mainMenu.asObservable();

  constructor() {
    this._mainMenu.next(this.__mainMenu);
    this._profileMenu.next(this.__profileMenu);
  }
}
