import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  appointment: boolean;
  status: string;

  // event$: Observable<any>;

  modal: boolean;
  type: string;

  constructor(private location: Location, private route: ActivatedRoute) { }

  ngOnInit() {
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
    this.status = 'Назначена встреча';
    // this.status = 'Предложение уже отправлено';
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
