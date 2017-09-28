import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
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
    class: string;
    text: string;
  };

  modal: boolean;
  type: string;

  constructor(private location: Location, private route: ActivatedRoute) {
    this.button = {
      show: null,
      class: null,
      text: null
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
    this.button.text = 'Предложить встречу';
    this.button.class = 'btn-primary';
    this.button.show = !this.appointment;
  }

  appoint(event) {
    this.button.text = 'Предложение отправлено';
    this.button.class = 'btn-success';
    setTimeout(() => {
      this.appointment = true;
      this.button.show = !this.appointment;
    }, 3000);
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
