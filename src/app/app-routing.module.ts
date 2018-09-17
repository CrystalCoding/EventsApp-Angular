import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule ,   Routes } from '@angular/router';
import { EventRouteActivatorService } from './common/event-route-activator.service';
import {   EventListComponent, 
          EventDetailsComponent, 
          CreateEventComponent, 
          Error404Component } from './Components/index';


const routes : Routes = [
  {path : 'events/new' , component: CreateEventComponent},
  {path : 'events' , component : EventListComponent },
  {path : 'events/:id' , component : EventDetailsComponent , canActivate : [EventRouteActivatorService]} , 
  {path : '' , redirectTo : 'events' , pathMatch: 'full' },
  {path : '404' , component : Error404Component},
  {path : 'user' , loadChildren : './user/user.module#UserModule'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
