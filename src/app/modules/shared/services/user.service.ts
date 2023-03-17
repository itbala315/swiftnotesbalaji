import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../../shared-types';
import { CrudService } from './crud.service';

@Injectable({ providedIn: 'root' })
export class UserService extends CrudService<User> {
  private __users: Partial<User[]> = [
    {
      id: 1,
      displayName: 'John Doe',
      firstName: 'John',
      lastName: 'Doe',
      emailAddress: 'johndoe@sample.com',
      // picture: 'https://randomuser.me/api/portraits/men/21.jpg',
      roles: ['admin', 'user'],
      color: '#3670b2',
      status: 'online',
    },
    {
      id: 2,
      displayName: 'Jane Smith',
      firstName: 'Jane',
      lastName: 'Smith',
      emailAddress: 'janesmith@sample.com',
      picture: 'https://randomuser.me/api/portraits/women/6.jpg',
      roles: ['user'],
      color: '#468547',
      status: 'offline',
    },
    {
      id: 3,
      displayName: 'Jim Doe',
      firstName: 'Jim',
      lastName: 'Doe',
      emailAddress: 'jimdoe@sample.com',
      // picture: 'https://randomuser.me/api/portraits/men/21.jpg',
      roles: ['admin', 'user'],
      color: '#3670b2',
    },
    {
      id: 4,
      displayName: 'James Doe',
      firstName: 'James',
      lastName: 'Doe',
      emailAddress: 'jamesdoe@sample.com',
      // picture: 'https://randomuser.me/api/portraits/men/21.jpg',
      roles: ['admin', 'user'],
      color: '#3670b2',
    },
  ];

  private _user: BehaviorSubject<Partial<User>> = new BehaviorSubject<
    Partial<User>
  >(null);
  public user$: Observable<Partial<User>> = this._user.asObservable();

  private _users: BehaviorSubject<Partial<User[]>> = new BehaviorSubject<
    Partial<User>[]
  >(null);
  public users$: Observable<Partial<User[]>> = this._users.asObservable();

  constructor(public http: HttpClient) {
    super(http);
    this._users.next(this.__users);
    this._user.next(this.__users[0]);
  }

  public getAll(): void {
    this._users.next(this.__users);
  }

  public get(id: number): void {
    const found: Partial<User> = this.__users.find(
      (user: Partial<User>) => user.id === id
    );
    this._user.next(found);
  }

  public delete(id: number): void {
    const users: Partial<User[]> = this.__users.filter(
      (user: Partial<User>) => user.id !== id
    );
    this.__users = users;
    this._users.next(users);
  }

  public HasAnyRole(...rolesToCheck: string[]): Promise<boolean> {
    let result: boolean = true;
    this.user$
      .pipe(
        map((user: User) => {
          if (user.roles && user.roles.length > 0) {
            return rolesToCheck.some(
              (role) => user.roles && user.roles.indexOf(role) !== -1
            );
          } else {
            return false;
          }
        })
      )
      .subscribe((checkResult) => {
        result = checkResult;
      });
    return new Promise<boolean>((resolve, reject) => {
      resolve(result);
    });
  }
}
