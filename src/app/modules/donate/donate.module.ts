import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { DialogModule } from '../dialog/dialog.module';
import { DonateComponent } from './donate.component';
import { DonateRouting } from './donate.routing';



@NgModule({
  declarations: [DonateComponent],
  imports: [
    DonateRouting,
    SharedModule,
    DialogModule
  ]
})
export class DonateModule { }
