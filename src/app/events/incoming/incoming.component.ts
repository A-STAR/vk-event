import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'incoming',
  templateUrl: './incoming.component.html',
  styleUrls: ['./incoming.component.scss']
})
export class IncomingComponent implements OnInit {

  incoming: boolean;
  event: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
    this.incoming = false;
    this.event = false;
  }

  user(event) {
    console.log('user', event);

    event = {
      id: 99,
      appointment: true
    };

    const { id, appointment } = event;

    this.router
      .navigate([ '/user', id ], { queryParams: { appointment } });
  }

  accept(event) {
    console.log('accept');
  }

  more(event) {
    console.log('more');
    this.incoming = true;
  }

  reschedule(event) {
    console.log('reschedule', event);

    event = {
      id: 55,
      postponement: true
    };

    const { id, postponement } = event;

    this.router
      .navigate([ '/appointment' ], { queryParams: { id, postponement } });
  }

  cancel(event) {
    console.log('cancel');
    this.event = true;
  }

  dismissIncoming(event) {
    console.log('dismiss incoming', event);
    this.incoming = false;
  }

  dismissEvent(event) {
    console.log('dismiss event', event);
    this.event = false;
  }

}
