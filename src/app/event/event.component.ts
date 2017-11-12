import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
// import { Observable } from 'rxjs/Observable';
import { switchMap } from 'rxjs/operators/switchMap';
import { EventModalComponent } from '../shared/event-modal/event-modal.component';

@Component({
  selector: 'event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  pending: boolean;
  status: string;

  // event$: Observable<any>;

  constructor(private route: ActivatedRoute, private router: Router) { }

  @ViewChild(EventModalComponent) readonly modal: EventModalComponent;

  ngOnInit() {
    const id = this.route
      .snapshot
      .paramMap
      .get('id');

    this.pending = 'true' === this.route
      .snapshot
      .queryParamMap
      .get('pending');

    console.log(id, this.pending);

    // this.event$ = this.service.getHero(id);

    // this.event$ = this.route
    //   .paramMap
    //   .pipe(switchMap((params: ParamMap) => this.service.getEvent(params.get('id'))));

    this.content();
  }

  content() {
    this.status = 'Предложение о встрече на рассмотрении у пользователя';
  }

  user(event, pending: boolean = false) {
    console.log('user', event);

    event = {
      id: 14,
      appointment: true,
      pending
    };

    const { id, appointment } = event;
    // const { id, appointment, pending } = event;

    this.router
      .navigate([ '/user', id ], { queryParams: { appointment, pending } });
  }

  reschedule(event) {
    console.log('reschedule', event);

    event = {
      id: 18,
      postponement: true
    };

    const { id, postponement } = event;

    this.router
      .navigate([ '/appointment' ], { queryParams: { id, postponement } });
  }

  cancel(event) {
    console.log('cancel');
    this.modal.open();
  }

  dismiss(event) {
    console.log('dismiss', event);
  }

}
