import { Injectable } from '@angular/core';
import { IUser } from '../models/iuser.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser : IUser;

  constructor() { }

  loginUser(userName : string, password : string) {
    this.currentUser = {
      id : 1,
      username : userName,
      firstName : 'Shubham',
      lastName : 'Singh'
    }
  }

  updateUser (firstName , lastName) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }

  isAuthenticated() {
    return !!this.currentUser;
  }
}
