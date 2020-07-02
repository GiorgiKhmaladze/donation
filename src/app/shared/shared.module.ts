import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorComponent } from './components/error/error.component';
import { FastDonationComponent } from './components/fast-donation/fast-donation.component';
import { InputComponent } from './components/input/input.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { NgvarDirective } from './directives/ngvar.directive';


@NgModule({
  declarations: [SpinnerComponent, NgvarDirective, InputComponent, ErrorComponent, FastDonationComponent],
  exports: [
    CommonModule,
    SpinnerComponent,
    NgvarDirective,
    InputComponent,
    ErrorComponent,
    ReactiveFormsModule,
    FormsModule,
    FastDonationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  entryComponents: [FastDonationComponent]
})
export class SharedModule { }
