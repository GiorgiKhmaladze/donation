import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TournamentComponent } from './tournament.component';
import { TournamentRouting } from './tournament.routing';



@NgModule({
  declarations: [TournamentComponent],
  imports: [
    CommonModule,
    TournamentRouting
  ]
})
export class TournamentModule { }
