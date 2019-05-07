import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../common/auth.service';
import { Router } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username : any;
  password : any;

  constructor(private authSerice : AuthService, private router : Router) { }

  ngOnInit() {
  }

  login(formValues) {
    console.log(formValues);
    this.authSerice.loginUser( formValues.username, formValues.password );
    this.router.navigate(['events']);
  }

  cancel() {
    this.router.navigate(['events']);
  }

}
