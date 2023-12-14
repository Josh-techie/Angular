import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent {
  @Input() name='';
  @Input() profilPicUrl='';
  @Input() age= 0;
  @Input() birthday=''
  @Input() bio='';
  @Input() interests: string[] = [];
}
