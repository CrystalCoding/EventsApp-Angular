import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component'; 
import { NavComponent, 
          EventDetailsComponent,
          EventListComponent, 
          EventThumbnailComponent, 
          CreateEventComponent,
          CreateSessionComponent, 
          Error404Component } from './Components'
import { EventRouteActivatorService, 
          EventService, 
          ToastrService } from './common';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './user/common/auth.service';
import { FormsModule, ReactiveFormsModule } from '../../node_modules/@angular/forms';
import { SessionListComponent } from './Components/session-list/session-list.component';




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    EventListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ 
    EventService,
    ToastrService,
    EventRouteActivatorService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
