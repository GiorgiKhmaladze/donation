import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DialogModule } from '../dialog/dialog.module';
import { HomeComponent } from './home.component';
import { HomeRouting } from './home.routing';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRouting,
    DialogModule
  ]
})
export class HomeModule { }
