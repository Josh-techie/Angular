import { Component } from '@angular/core';
import {Person} from "../types";
import  { myProfileData, friendsData} from "./data";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   myProfileData: Person =  myProfileData;
   friendsData: Person[] = friendsData;

onPersonClicked( person: Person){
  alert(`${person.name} likes ${person.interests.join((', '))}`)
}
}
