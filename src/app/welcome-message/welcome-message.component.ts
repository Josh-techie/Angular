import { Component, OnInit, Input } from '@angular/core';
import {Person} from "../../types";

@Component({
  selector: 'app-welcome-message',
  templateUrl: './welcome-message.component.html',
  styleUrls: ['./welcome-message.component.css']
})
export class WelcomeMessageComponent {

  @Input() name!: string;

  hideMessage(): void {
    alert('Hiding Welcome Message!');
  }

}
