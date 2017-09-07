import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'accepted',
  templateUrl: './accepted.component.html',
  styleUrls: ['./accepted.component.scss']
})
export class AcceptedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  navigate(event) {
    console.log('navigate');
  }

}
