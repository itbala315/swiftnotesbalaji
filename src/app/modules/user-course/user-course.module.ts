import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { UserCourseRoutingModule } from './user-course-routing.module';
import { CourseModule } from '../course';
import { Components, ComponentsExport } from './components';
import { Services } from './services';

@NgModule({
  imports: [SharedModule, UserCourseRoutingModule, CourseModule],
  declarations: [...Components],
  providers: [...Services],
  exports: [...ComponentsExport],
})
export class UserCourseModule {}
