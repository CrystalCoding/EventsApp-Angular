import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule ,   Routes } from '@angular/router';
import { EventListComponent } from './event-list/event-list.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { Error404Component } from './errors/error404/error404.component';
import { EventRouteActivatorService } from './common/event-route-activator.service';

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
