import { Component, Input } from '@angular/core';
import { Course } from '../../../shared-types';

@Component({
  selector: 'app-course-card-2',
  templateUrl: './course-card-2.component.html',
  styleUrls: ['./course-card-2.component.scss'],
})
export class CourseCard2Component {
  @Input() course: Partial<Course> = {};
  maxRating: number = 5;
}
