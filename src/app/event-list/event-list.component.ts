import { Component, OnInit } from '@angular/core';
import { EventService } from '../common/event.service';
import { ToastrService } from '../common/toastr.service';

declare let toastr;
@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  eventsList:any [];
  constructor(private eventService:EventService , private toastrService : ToastrService) {
    
   }

  ngOnInit() {
    this.eventsList = this.eventService.getEvents();
  }

  handleThumbnailClickEvent(eventName) {
    this.toastrService.success(eventName);
  }

}
