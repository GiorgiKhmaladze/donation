import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorComponent } from './components/error/error.component';
import { FastDonationComponent } from './components/fast-donation/fast-donation.component';
import { InputComponent } from './components/input/input.component';
import { SliderComponent } from './components/slider/slider.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ControlErrorContainerDirective } from './directives/control-error-container.directive';
import { ControlErrorDirective } from './directives/control-error.directive';
import { FormSubmitDirective } from './directives/form-submit.directive';
import { NgvarDirective } from './directives/ngvar.directive';


@NgModule({
  declarations: [
    SpinnerComponent,
    NgvarDirective,
    InputComponent,
    ErrorComponent,
    FastDonationComponent,
    SliderComponent,
    ControlErrorContainerDirective,
    FormSubmitDirective,
    ControlErrorDirective,
  ],
  exports: [
    CommonModule,
    SpinnerComponent,
    NgvarDirective,
    InputComponent,
    ErrorComponent,
    ReactiveFormsModule,
    FormsModule,
    FastDonationComponent,
    SliderComponent,
    ControlErrorContainerDirective,
    FormSubmitDirective,
    ControlErrorDirective,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  entryComponents: [FastDonationComponent, ErrorComponent]
})
export class SharedModule { }
