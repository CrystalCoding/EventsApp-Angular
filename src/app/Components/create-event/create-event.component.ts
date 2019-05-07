import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../../common';
import { IEvent } from '../../Models';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  newEvent : any;

  constructor(private router: Router, private eventService : EventService) { }

  ngOnInit() {
  }

  saveEvent( formValues : any ) {
    let event : IEvent = {
      id : undefined,
      name : formValues.name,
      date : formValues.date,
      time : formValues.time,
      price : formValues.price,
      imageUrl : formValues.imageUrl,
      onlineUrl : formValues.onlineUrl,
      sessions : formValues.sessions,
      location : formValues.location
    };

    this.eventService.saveEvent( event);
    this.router.navigate(['/events']);
  }

  cancel() {
    this.router.navigate(['/events']);
  }


}
