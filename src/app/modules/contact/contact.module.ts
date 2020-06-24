import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContactComponent } from './contact.component';
import { ContactRouting } from './contact.routing';



@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    ContactRouting
  ]
})
export class ContactModule { }
