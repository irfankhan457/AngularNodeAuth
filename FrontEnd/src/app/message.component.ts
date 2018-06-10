import { Component } from '@angular/core';
import  { AppService } from './app.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'messages',
  template: `<div *ngFor="let message of appService.messages">
                <mat-card>{{message.msg}}</mat-card>
             </div>`
})
export class MessageComponent {

  constructor( private appService : AppService,
               private activatedRoute : ActivatedRoute) {}
  
  ngOnInit() {
    var userId = this.activatedRoute.snapshot.params.id;
    this.appService.getMessage(userId);    
  }
}
