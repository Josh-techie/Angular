import { Component } from '@angular/core';
import {Person} from "../types";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   myPerson: Person = {
     profilePicUrl: 'assets/profil.jpg',
    name : 'Marie',
    age: 21,
    bio: 'I like to eat and swim',
    birthday: '23 March',
    interests: ['Programming', 'Data Science', 'Gardening']
  }
}
