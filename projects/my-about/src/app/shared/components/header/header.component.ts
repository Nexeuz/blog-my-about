import { Component, OnInit } from '@angular/core';
import {environment} from '@environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    logo = environment.logoUrl;
  constructor() { }

  ngOnInit(): void {
  }

}
