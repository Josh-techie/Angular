import { Component, OnInit, Input} from '@angular/core';
import {Person} from "../../types";

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.css']
})
export class PersonCardComponent {
@Input() person!: Person;

}
