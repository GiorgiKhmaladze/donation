import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './components/input/input.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { NgvarDirective } from './directives/ngvar.directive';


@NgModule({
  declarations: [SpinnerComponent, NgvarDirective, InputComponent],
  exports: [CommonModule, SpinnerComponent, NgvarDirective, InputComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class SharedModule { }
