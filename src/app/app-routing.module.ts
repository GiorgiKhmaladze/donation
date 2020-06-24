import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [{
  path: '',
  loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
  data: {
    key: 'home'
  }
},
{
  path: 'contact',
  loadChildren: () => import('./modules/contact/contact.module').then(m => m.ContactModule),
  data: {
    key: 'contact'
  }
},
{
  path: 'donate',
  loadChildren: () => import('./modules/donate/donate.module').then(m => m.DonateModule),
  data: {
    key: 'donate'
  }
}, {
  path: '**',
  redirectTo: '',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
