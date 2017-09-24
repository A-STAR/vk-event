import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  back() {
    this.location
      .back();
  }

}
