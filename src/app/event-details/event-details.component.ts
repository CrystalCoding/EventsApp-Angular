import { Component, OnInit } from '@angular/core';
import { EventService } from '../common/event.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  
  event:any;
  constructor(private eventService: EventService,  private routes : ActivatedRoute) { }

  ngOnInit() {
    this.event = this.eventService.getEvent(+this.routes.snapshot.params['id']);

  }

}
