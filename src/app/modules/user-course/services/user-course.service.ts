import { Injectable } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { UserCourse, Course } from '../../shared-types';
import { CourseService } from '../../course';
import { UserService } from '../../shared';

@Injectable()
export class UserCourseService {
  _user_course: Partial<UserCourse>[] = [
    {
      userId: 1,
      courseId: 3,
    },
    {
      userId: 1,
      courseId: 2,
    },
    {
      userId: 1,
      courseId: 4,
    },
    {
      userId: 2,
      courseId: 3,
    },
  ];

  public userCourses$: Observable<Partial<UserCourse>[]> = combineLatest([
    this.user.user$,
    this.course.courses$,
  ]).pipe(
    // tap(([user, courses]) => console.log('input:', { user, courses })),
    map(([user, courses]) => {
      const userCourses: Partial<UserCourse>[] = this._user_course
        .filter(
          (userCourse: Partial<UserCourse>) => userCourse.userId === user.id
        )
        .map((userCourse: Partial<UserCourse>) => {
          return {
            ...userCourse,
            user,
            course: courses.find(
              (course: Partial<Course>) => course.id === userCourse.courseId
            ),
          };
        });
      // console.log('userCourses:', userCourses);
      return userCourses;
    })
    // tap((results) => console.log('results:', results))
  );

  constructor(private user: UserService, private course: CourseService) {}
}
