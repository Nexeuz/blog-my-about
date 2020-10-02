import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {PdfViewerComponent} from '../../shared/components/pdf-viewer/pdf-viewer.component';

@Component({
  selector: 'app-about-skills',
  templateUrl: './about-skills.component.html',
  styleUrls: ['./about-skills.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutSkillsComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openPDF(): void {
    this.dialog.open(PdfViewerComponent, {
      width: '90vw',
      height: '90vh'
    });
  }
}
