import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared';
import { MenuModule } from '../menu';
import { Components, ComponentsExport } from './components';

@NgModule({
  imports: [CommonModule, SharedModule, MenuModule],
  declarations: [...Components],
  exports: [...ComponentsExport],
})
export class Layout3Module {}
