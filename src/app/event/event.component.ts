import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  back(event) {
    event.preventDefault();
    this.location
      .back();
  }

}
