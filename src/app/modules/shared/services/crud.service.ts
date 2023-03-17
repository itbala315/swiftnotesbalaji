import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CrudService<T> {
  constructor(public http: HttpClient) {}

  // This would actually be done by the api endpoint
  asc = (a: Partial<T>, b: Partial<T>, field: string): number => {
    return a[field] > b[field] ? 1 : a[field] < b[field] ? -1 : 0;
  };

  // This would actually be done by the api endpoint
  desc = (a: Partial<T>, b: Partial<T>, field: string): number => {
    return a[field] < b[field] ? 1 : a[field] > b[field] ? -1 : 0;
  };
}
