import { Component, OnInit } from '@angular/core';
import { EventService } from '../../common/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent, ISession } from '../../Models';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  

  event:IEvent;
  addMode : boolean = false;
  constructor(private eventService: EventService,  private routes : ActivatedRoute) { }

  ngOnInit() {
    this.event = this.eventService.getEvent(+this.routes.snapshot.params['id']);

  }

  addSession() {
    this.addMode = true;
  }

  saveNewSession(session : ISession ) {
    const nextId = Math.max.apply( null , this.event.sessions.map(s=>s.id));
    session.id = nextId +1;
    this.event.sessions.push(session);
    this.eventService.updateEvent(this.event);
    this.addMode = false;
  }
}
