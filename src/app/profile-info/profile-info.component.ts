import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent {
  name = 'Joeseoh Ab';
  profilPicUrl = 'assets/profil.jpg';
  age = 23;
  birthday = 'May 15'
  bio = 'I like to program, I also like food and gym.';
  interests = ['Programming', 'Swimming', 'Volleyball', 'Gym'];
}
