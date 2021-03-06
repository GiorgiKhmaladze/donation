import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { DialogModule } from '../dialog/dialog.module';
import { HomeComponent } from './home.component';
import { HomeRouting } from './home.routing';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    HomeRouting,
    DialogModule,
    SharedModule
  ]
})
export class HomeModule { }
