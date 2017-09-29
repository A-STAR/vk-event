import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'outgoing',
  templateUrl: './outgoing.component.html',
  styleUrls: ['./outgoing.component.scss']
})
export class OutgoingComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  user(event) {
    console.log('user', event);

    event = {
      id: 37,
      appointment: false
    };

    const { id, appointment } = event;

    this.router
      .navigate([ '/user', id ], { queryParams: { appointment } });
  }

  event(event, appointment: boolean = false) {
    console.log('event', event);

    event = {
      id: 139,
      appointment
    };

    const { id } = event;
    // const { id, appointment } = event;

    this.router
      .navigate([ '/event', id ], { queryParams: { appointment } });
  }

}
