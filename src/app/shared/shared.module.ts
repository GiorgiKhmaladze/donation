import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InsertionDirective } from './directives/insertion.directive';


@NgModule({
  declarations: [InsertionDirective],
  exports: [InsertionDirective],
  imports: [
    CommonModule,
  ]
})
export class SharedModule { }
