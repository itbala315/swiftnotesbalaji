import { NgModule } from '@angular/core';
import { CourseRoutingModule } from './course-routing.module';
import { SharedModule } from '../shared';
import { Components, ComponentsExport } from './components';
// import { Services } from './services';

@NgModule({
  imports: [SharedModule, CourseRoutingModule],
  declarations: [...Components],
  // providers: [...Services],
  exports: [...ComponentsExport],
})
export class CourseModule {}
