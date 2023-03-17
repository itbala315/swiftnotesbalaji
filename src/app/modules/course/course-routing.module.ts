import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseListComponent, CourseDetailComponent } from './components';

const routes: Routes = [
  {
    path: 'list',
    component: CourseListComponent,
  },
  {
    path: 'detail/:id',
    component: CourseDetailComponent,
  },
  {
    path: '',
    redirectTo: 'list',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseRoutingModule {}
