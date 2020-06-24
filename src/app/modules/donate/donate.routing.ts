import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonateComponent } from './donate.component';

const routes: Routes = [
  {
    path: '',
    component: DonateComponent,
    data: {
      key: 'donate'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DonateRouting {
}
