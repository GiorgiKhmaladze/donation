import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { DialogModule } from '../dialog/dialog.module';
import { DonateComponent } from './donate.component';
import { DonateRouting } from './donate.routing';



@NgModule({
  declarations: [DonateComponent],
  imports: [
    CommonModule,
    DonateRouting,
    SharedModule,
    DialogModule
  ]
})
export class DonateModule { }
