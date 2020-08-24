import {ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-carousel',
  templateUrl: './about-carousel.component.html',
  styleUrls: ['./about-carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutCarouselComponent implements OnInit {
  items = [
    {
      thumbnail: 'https://i.pinimg.com/originals/74/00/de/7400def3d411768dfdd0205c5cc347e6.gif',
      name: '1'
    },
    {
      thumbnail: 'https://i.pinimg.com/originals/74/00/de/7400def3d411768dfdd0205c5cc347e6.gif',
      name: '2'

    },
    {
      thumbnail: 'https://i.pinimg.com/originals/74/00/de/7400def3d411768dfdd0205c5cc347e6.gif',
      name: '3'
    },
    {
      thumbnail: 'https://i.pinimg.com/originals/74/00/de/7400def3d411768dfdd0205c5cc347e6.gif',
      name: '4'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
