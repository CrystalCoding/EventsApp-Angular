import { Component, OnInit, Input } from '@angular/core';
import { IEvent } from '../../Models';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {

  @Input() /*This decorator tells angular that value will come from parent*/ 
  eventThumbnail:IEvent;
  

  constructor() { }

  ngOnInit() {
  }

}
