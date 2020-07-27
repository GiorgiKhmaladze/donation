import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { DialogModule } from '../dialog/dialog.module';
import { EventsComponent } from './events.component';
import { EventsRouting } from './events.routing';



@NgModule({
  declarations: [EventsComponent],
  imports: [
    EventsRouting,
    DialogModule,
    SharedModule
  ]
})
export class EventsModule { }
