import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { NgvarDirective } from './directives/ngvar.directive';


@NgModule({
  declarations: [SpinnerComponent, NgvarDirective],
  exports: [CommonModule, SpinnerComponent, NgvarDirective],
  imports: [
    CommonModule,
  ]
})
export class SharedModule { }
