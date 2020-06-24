import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { DialogComponent } from './dialogbox/dialog.component';



@NgModule({
  declarations: [DialogComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  entryComponents: [DialogComponent]
})
export class DialogModule { }
