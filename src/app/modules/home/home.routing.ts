import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    data: {
      key: 'home'
    }
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {
      key: 'home'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRouting {
}
