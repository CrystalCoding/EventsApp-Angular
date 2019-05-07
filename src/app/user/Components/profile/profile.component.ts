import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '../../../../../node_modules/@angular/forms';
import { AuthService } from '../../common/auth.service';
import { Router } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

profileForm : FormGroup;
private firstName;
private lastName;

  constructor(private authService : AuthService , private router : Router) { }

  ngOnInit() {
    this.firstName = new FormControl( this.authService.currentUser.firstName, [Validators.required ,  Validators.pattern('[a-zA-Z].*')]);
    this.lastName = new FormControl( this.authService.currentUser.lastName ,  Validators.required);
    this.profileForm = new FormGroup ({
      firstName : this.firstName,
      lastName : this.lastName
    });
    console.log("Profile : OnInit : profileForm ", this.profileForm);
  }

  saveProfile( formValues ) {
    this.authService.updateUser(formValues.firstName , formValues.lastName)
    this.router.navigate(['events']);
  }

  validateFirstName() {
    return this.firstName.valid || this.firstName.untouched;
  }

  validateLastName() {
    return this.lastName.valid || this.lastName.untouched;
  }

  cancel() {
    this.router.navigate(['events']);
  }
}
