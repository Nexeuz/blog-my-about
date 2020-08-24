import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-about-me-card-profile',
  templateUrl: './about-me-card-profile.component.html',
  styleUrls: ['./about-me-card-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutMeCardProfileComponent implements OnInit {
  urlImage = './../../../assets/me.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
