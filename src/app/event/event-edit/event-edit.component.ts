import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.scss']
})
export class EventEditComponent implements OnInit {

// event$: Observable<any>;

constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
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

  reschedule(event) {
    console.log('reschedule');
  }

  cancel(event) {
    console.log('cancel');
    // this.router
    //   .navigate(['/events/incoming']);
  }

}
