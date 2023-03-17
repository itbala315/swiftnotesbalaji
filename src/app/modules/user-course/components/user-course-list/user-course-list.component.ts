import { Component } from '@angular/core';
import { UserCourseService } from '../../services';

@Component({
  selector: 'app-user-course-list',
  templateUrl: './user-course-list.component.html',
  styleUrls: ['./user-course-list.component.scss'],
})
export class UserCourseListComponent {
  constructor(public service: UserCourseService) {}
}
