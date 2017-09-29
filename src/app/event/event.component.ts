import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  appointment: boolean;
  status: string;

  // event$: Observable<any>;

  modal: boolean;
  type: string;

  constructor(private location: Location, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.modal = false;

    const id = this.route
      .snapshot
      .paramMap
      .get('id');

    this.appointment = 'true' === this.route
      .snapshot
      .queryParamMap
      .get('appointment');

    console.log(id, this.appointment);

    // this.event$ = this.service.getHero(id);

    // this.event$ = this.route
    //   .paramMap
    //     .switchMap((params: ParamMap) =>
    //       this.service
    //         .getEvent(params.get('id'))
    //     );

    this.content();
  }

  content() {
    this.status = 'Предложение о встрече на рассмотрении у пользователя';
  }

  navigate(event) {
    console.log('navigate', event);

    event = {
      id: 14,
      appointment: true
    };

    const { id, appointment } = event;

    this.router
      .navigate([ '/user', id ], { queryParams: { appointment } });
  }

  reschedule(event) {
    console.log('reschedule');
    this.type = 'reschedule';
    this.modal = true;
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

  back(event) {
    event.preventDefault();
    this.location
      .back();
  }

}
