import { CourseListComponent } from './course-list';
import { CourseCardComponent } from './course-card';
import { CourseCard2Component } from './course-card-2';
import { CourseDetailComponent } from './course-detail';
import { RatingStarsComponent } from './rating-stars';

export const ComponentsExport = [CourseListComponent, CourseCardComponent];

export const Components = [
  ...ComponentsExport,
  CourseCard2Component,
  RatingStarsComponent,
  CourseDetailComponent,
];

export * from './course-list';
export * from './course-card';
export * from './course-card-2';
export * from './course-detail';
export * from './rating-stars';
