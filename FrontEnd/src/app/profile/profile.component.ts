import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { AppService } from '../app.service';
import { AuthService } from '../auth/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html'

})
export class ProfileComponent {
emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
    ]);

constructor( private appService : AppService,
             private authService : AuthService,
             private activatedRoute : ActivatedRoute) {}
    profile;

    ngOnInit() {
        var profileId = this.activatedRoute.snapshot.params.id;
        this.appService.getUserProfile(profileId).subscribe(data => this.profile = data.json());
    }

 
}
