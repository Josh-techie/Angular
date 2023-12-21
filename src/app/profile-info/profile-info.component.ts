import { Component, OnInit, Input} from '@angular/core';
import {Person} from "../../types";
@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  // here you can add another styles if you want
  styleUrls: ['./profile-info.component.css', '../red_text.css']
})
export class ProfileInfoComponent {
  @Input() person: Person = {

    name:'',
    profilePicUrl:'',
    age: 0,
    birthday:'',
    bio:'',
    interests: [],
  }

  displayDetails (){
   alert(`${this.person.name} is ${this.person.age} years old`);
  }
}
