import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { AppService } from '../app.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html'

})
export class RegisterComponent {
emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
    ]);

constructor( private appService : AppService,
             private authService : AuthService) {

}

registerData = {

}

post() {
    this.authService.sendUserRegistration(this.registerData);
    console.log(this.registerData);
}
}
