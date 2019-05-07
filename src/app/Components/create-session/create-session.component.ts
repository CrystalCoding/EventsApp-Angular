import { Component, OnInit, Output } from '@angular/core';
import { FormControl, Validators, FormGroup } from '../../../../node_modules/@angular/forms';
import { EventService } from '../../common';
import { ISession } from '../../Models';
import { EventEmitter } from '../../../../node_modules/protractor';

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit {

  @Output()
  saveNewSession = new EventEmitter();

  public newSessionForm : FormGroup;
  name : FormControl;
  presenter : FormControl;
  duration : FormControl;
  level : FormControl;
  abstract : FormControl;

  constructor(private eventService : EventService) { }

  ngOnInit() {
    this.name = new FormControl('', Validators.required);
    this.presenter = new FormControl('', Validators.required);
    this.duration = new FormControl('', Validators.required);
    this.level = new FormControl('', Validators.required);
    this.abstract= new FormControl('', [Validators.required , Validators.maxLength(400)]);

    this.newSessionForm = new FormGroup({
      name : this.name,
      presenter : this.presenter,
      duration : this.duration,
      level : this.level,
      abstract : this.abstract

    });
  }

  saveSession ( formValues ) {
    let newSession : any = {
      id : undefined,
      name : formValues.name,
      presenter : formValues.presenter,
      duration : formValues.duration,
      level : formValues.level,
      abstract : formValues.abstract,
      voters : []
    }
    this.saveNewSession.emit(newSession);
  }

}
