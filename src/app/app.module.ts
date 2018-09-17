import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component'; 
import { NavComponent, 
          EventDetailsComponent,
          EventListComponent, 
          EventThumbnailComponent, 
          CreateEventComponent, 
          Error404Component } from './Components/index'
import { EventRouteActivatorService, 
          EventService, 
          ToastrService } from './common/index';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    EventListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ EventService, ToastrService , EventRouteActivatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
