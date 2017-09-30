import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  back(event) {
    event.preventDefault();
    this.location
      .back();
  }

}
