import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'incoming',
  templateUrl: './incoming.component.html',
  styleUrls: ['./incoming.component.scss']
})
export class IncomingComponent implements OnInit {

  modal: boolean;
  type: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.modal = false;
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
    this.type = 'more';
    this.modal = true;
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
    this.type = 'cancel';
    this.modal = true;
  }

  dismiss(event) {
    console.log('dismiss', event);
    this.modal = false;
  }

}
