import { Http } from '@angular/http';
import  { Injectable } from '@angular/core';

@Injectable()
export class AppService {
    messages= [];
    users = [];
    path = "http://localhost:3000";
    constructor( private http : Http) {

    }

    getMessage(userId) {
        this.http.get(this.path + '/posts/'+userId).subscribe(res => {
            this.messages = res.json()
        })
    }

    postMessage(message) {
        console.log(message)
        this.http.post(this.path + '/post/', message).subscribe(res => {
        })
    }

    getUsers() {
        this.http.get(this.path + '/users/').subscribe(res => {
            this.users = res.json();
        })
    }

    getUserProfile(profileId) {
        return this.http.get(this.path + '/profile/'+profileId)
    }


}