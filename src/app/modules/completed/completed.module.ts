import { NgModule } from '@angular/core';
import { CompletedRoutingModule } from './completed-routing.module';
import { SharedModule } from '../shared';
import { Components, ComponentsExport } from './components';

@NgModule({
  imports: [SharedModule, CompletedRoutingModule],
  declarations: [...Components],
  exports: [...ComponentsExport],
})
export class CompletedModule {}
