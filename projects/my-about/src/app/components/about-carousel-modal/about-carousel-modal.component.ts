import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

export interface AboutCarouselModal {
  title: string;
  img: string;
  description: string;
}

@Component({
  selector: 'app-about-carousel-modal',
  templateUrl: './about-carousel-modal.component.html',
  styleUrls: ['./about-carousel-modal.component.scss'],
})
export class AboutCarouselModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AboutCarouselModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: AboutCarouselModal) { }

  ngOnInit(): void {
  }

}
