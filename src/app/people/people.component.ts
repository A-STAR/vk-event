import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  @ViewChild('search') search: ElementRef;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  enter(event) {
    event.preventDefault();
  }

  focus(event) {
    this.search
      .nativeElement
      .focus();
  }

  user(event) {
    console.log('navigate', event);

    event = {
      id: 14,
      appointment: false
    };

    const { id, appointment } = event;

    this.router
      .navigate([ '/user', id ], { queryParams: { appointment } });
  }

}
