import { NgModule } from '@angular/core';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared';
import { Components, ComponentsExport } from './components';

@NgModule({
  imports: [SharedModule, UserRoutingModule],
  declarations: [...Components],
  exports: [...ComponentsExport],
})
export class UserModule {}
