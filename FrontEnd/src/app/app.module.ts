import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  { AppService } from './app.service';
import { HttpModule } from '@angular/http';
import {MatButtonModule, MatCheckboxModule, MatCardModule , MatToolbarModule, 
  MatInputModule, MatFormFieldModule, MatIconModule, MatListModule} from '@angular/material';
import { MessageComponent } from './message.component';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AuthService } from './auth/auth.service';
import { ProfileComponent } from './profile/profile.component';
import { PostComponent } from './post/post.component';


import { AppComponent } from './app.component';
import { UsersComponent } from './users/user.component';



const routes = [
  {path: '', component : PostComponent},
  {path: 'register', component : RegisterComponent},
  {path: 'login', component : LoginComponent},
  {path: 'users', component : UsersComponent},
  {path: 'profile/:id', component : ProfileComponent}
 // {path: 'register', component : RegisterComponent}
]

@NgModule({
  declarations: [
    AppComponent, MessageComponent, RegisterComponent, LoginComponent, UsersComponent, ProfileComponent,
    PostComponent
  ],
  imports: [
    BrowserModule, HttpModule, MatButtonModule, MatCheckboxModule, MatCardModule, MatToolbarModule,
    RouterModule.forRoot(routes), MatInputModule, BrowserAnimationsModule, FormsModule, MatListModule,
    ReactiveFormsModule, MatFormFieldModule, MatIconModule
  ],
  providers: [AppService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
