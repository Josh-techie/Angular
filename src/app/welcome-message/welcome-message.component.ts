import { Component, OnInit, Input } from '@angular/core';
import {Person} from "../../types";

@Component({
  selector: 'app-welcome-message',
  templateUrl: './welcome-message.component.html',
  styleUrls: ['./welcome-message.component.css']
})
export class WelcomeMessageComponent {

  @Input() name!: string;

  isHidden: boolean = false;
  hideMessage(): void {
    this.isHidden = true;
  }
  showMessage(): void {
    this.isHidden = false;
  }
}
