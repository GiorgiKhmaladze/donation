import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { DialogModule } from '../dialog/dialog.module';
import { RegisterComponent } from './register.component';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    DialogModule,
    SharedModule
  ]
})
export class RegisterModule { }
