import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Services } from './services';

@NgModule({
  imports: [CommonModule],
  providers: [...Services],
})
export class MenuModule {}
