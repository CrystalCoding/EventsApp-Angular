import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent,
          LoginComponent } from './Components';

const routes: Routes = [
  {path : 'profile' , component : ProfileComponent},
  {path : 'login' , component : LoginComponent},
  {path : '' , redirectTo : 'profile' , pathMatch : 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
