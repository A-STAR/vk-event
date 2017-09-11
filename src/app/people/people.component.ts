import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigate(event) {
    console.log('navigate');
    this.router
      .navigate(['people']);
  }

}
