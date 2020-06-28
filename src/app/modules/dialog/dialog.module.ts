import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InsertionDirective } from 'src/app/shared/directives/insertion.directive';
import { DialogComponent } from './dialogbox/dialog.component';



@NgModule({
  declarations: [InsertionDirective, DialogComponent],
  imports: [
    CommonModule,
  ],
  entryComponents: [DialogComponent]
})
export class DialogModule { }
