import { Component } from '@angular/core';
import  { AppService } from '../app.service';


@Component({
  selector: 'users',
  templateUrl: './user.component.html'
})
export class UsersComponent {
    constructor( private appService : AppService) {}

    ngOnInit() {
        this.appService.getUsers();    
    }
}
