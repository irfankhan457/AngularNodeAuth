

import { Component } from '@angular/core';
import  { AppService } from '../app.service';


@Component({
  selector: 'post',
  templateUrl: './post.component.html'
})
export class PostComponent {

 

  constructor( private appService : AppService) {}
  postMsg = '';

  post() {
    this.appService.postMessage({msg: this.postMsg});    
  }
}
