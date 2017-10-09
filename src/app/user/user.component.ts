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
  pending: boolean;
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

    this.pending = 'true' === this.route
      .snapshot
      .queryParamMap
      .get('pending');

    console.log(id, this.appointment, this.pending);

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
    this.image = 'assets/images/victor.jpg';
    this.name = 'Буркин Виктор';
    this.status = this.pending ?
      'Предложение уже отправлено' :
      'Назначена встреча';
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

}
