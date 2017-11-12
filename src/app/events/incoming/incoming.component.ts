import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IncomingModalComponent } from '../shared/incoming-modal/incoming-modal.component';
import { EventModalComponent } from '../../shared/event-modal/event-modal.component';

@Component({
  selector: 'incoming',
  templateUrl: './incoming.component.html',
  styleUrls: ['./incoming.component.scss']
})
export class IncomingComponent implements OnInit {

  constructor(private router: Router) { }

  @ViewChild(IncomingModalComponent) readonly incoming: IncomingModalComponent;
  @ViewChild(EventModalComponent) readonly event: EventModalComponent;

  ngOnInit() {
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
    this.incoming.open();
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
    this.event.open();
  }

  dismissIncoming(event) {
    console.log('dismiss incoming', event);
  }

  dismissEvent(event) {
    console.log('dismiss event', event);
  }

}
