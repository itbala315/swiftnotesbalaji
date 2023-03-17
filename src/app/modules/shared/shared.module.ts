import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { Components } from './components';
import { Pipes } from './pipes';
import { Directives } from './directives';

const ExportModules = [
  CommonModule,
  RouterModule,
  MaterialModule,
  HttpClientModule,
];

@NgModule({
  imports: [...ExportModules],
  declarations: [...Pipes, ...Directives, ...Components],
  exports: [...Pipes, ...Directives, ...Components, ...ExportModules],
})
export class SharedModule {}
