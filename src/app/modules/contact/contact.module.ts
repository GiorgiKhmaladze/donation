import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContactComponent } from './contact.component';
import { ContactRouting } from './contact.routing';



@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    ContactRouting,
    SharedModule
  ]
})
export class ContactModule { }
