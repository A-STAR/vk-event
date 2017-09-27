import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

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

    console.log(id);

    // this.event$ = this.service.getHero(id);

    // this.event$ = this.route
    //   .paramMap
    //     .switchMap((params: ParamMap) =>
    //       this.service
    //         .getEvent(params.get('id'))
    //     );
  }

  navigate(event) {
    console.log('navigate', event);

    event = { id: 14 };

    const id = event.id;

    this.router
      .navigate(['/user', id, {appointment: true}]);
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
