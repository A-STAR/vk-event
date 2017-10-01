import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  image: string;
  name: string;

  // event$: Observable<any>;

  button: {
    show: boolean;
  };

  modal: boolean;
  type: string;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.button = {
      show: null
    };
  }

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
    this.show();
  }

  content() {
    this.image = '../../../assets/images/victor.jpg';
    this.name = 'Буркин Виктор';
    this.status = 'Назначена встреча';
    // this.status = 'Предложение уже отправлено';
  }

  show() {
    this.button.show = !this.appointment;
  }

  appoint(event) {
    console.log('appoint', event);

    event = { id: 47 };

    const { id } = event;

    this.router
      .navigate([ '/appointment' ], { queryParams: { id } });
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

}
