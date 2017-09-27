import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  // event$: Observable<any>;

  ngOnInit() {
    const { id, appointment } = this.route
      .snapshot
      .params;

    console.log(id, appointment);

    // this.event$ = this.service.getHero(id);

    // this.event$ = this.route
    //   .paramMap
    //     .switchMap((params: ParamMap) =>
    //       this.service
    //         .getEvent(params.get('id'))
    //     );
  }

}
