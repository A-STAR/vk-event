import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  // event$: Observable<any>;

  constructor(private route: ActivatedRoute, private location: Location) { }

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

  back(event) {
    event.preventDefault();
    this.location
      .back();
  }

}
