import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './Components/nav/nav.component';
import { EventListComponent } from './Components/event-list/event-list.component';
import { EventThumbnailComponent } from './Components/event-thumbnail/event-thumbnail.component';
import { EventService } from './common/event.service';
import { ToastrService } from './common/toastr.service';
import { EventDetailsComponent } from './Components/event-details/event-details.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateEventComponent } from './Components/create-event/create-event.component';
import { Error404Component } from './Components/errors/error404/error404.component';
import { EventRouteActivatorService } from './common/event-route-activator.service';

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
