import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { AppService } from '../app.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html'

})
export class LoginComponent {
emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
    ]);

constructor( private appService : AppService,
             private authService : AuthService) {}

loginData = {}

    login(loginData) {
        this.authService.loginUser(this.loginData);
        //console.log(this.loginData);
    }
}
