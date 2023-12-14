import { Component, OnInit, Input} from '@angular/core';
import {Person} from "../../types";
@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
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

}
