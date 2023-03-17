import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Course } from '../../shared-types';

@Injectable({ providedIn: 'root' })
export class CourseService {
  localCourses: Partial<Course>[] = [
    {
      id: 1,
      name: 'Angular',
      subject: 'Subject 1',
      image: 'https://angular.io/assets/images/logos/angular/angular.svg',
      description: "Course - 1 - Basic - The modern web developer's platform",
      duration: '2 weeks',
      tags: ['typescript', 'angular'],
      provider: 'Google',
      rating: 4.73,
      datePublished: new Date('2014-11-01'),
      dateUpdated: new Date('2021-11-01'),
    },

    {
      id: 2,
      name: 'Typescript',
      subject: 'Subject 2',
      image: 'https://angular.io/assets/images/logos/angular/angular.svg',
      description: "Course - 2 - Basic - The modern web developer's language",
      duration: '2 weeks',
      tags: ['typescript', 'angular'],
      provider: 'Google',
      rating: 3.02,
      datePublished: new Date('2014-11-01'),
      dateUpdated: new Date('2021-11-01'),
    },
    {
      id: 3,
      name: 'Angular',
      subject: 'Subject 3',
      image: 'https://angular.io/assets/images/logos/angular/angular.svg',
      description:
        "Course - 3 - Advanced - The modern web developer's platform",
      duration: '2 weeks',
      tags: ['typescript', 'angular'],
      provider: 'Google',
      rating: 2.1,
      datePublished: new Date('2014-11-01'),
      dateUpdated: new Date('2021-11-01'),
    },

    {
      id: 4,
      name: 'Typescript',
      subject: 'Subject 4',
      image: 'https://angular.io/assets/images/logos/angular/angular.svg',
      description:
        "Course - 4 - Advanced - The modern web developer's language",
      duration: '2 weeks',
      tags: ['typescript', 'angular'],
      provider: 'Google',
      rating: 4.9,
      datePublished: new Date('2014-11-01'),
      dateUpdated: new Date('2021-11-01'),
    },
  ];

  courses: BehaviorSubject<Partial<Course>[]> = new BehaviorSubject<
    Partial<Course>[]
  >(this.localCourses);
  courses$: Observable<Partial<Course>[]> = this.courses.asObservable();

  constructor() {}
}
