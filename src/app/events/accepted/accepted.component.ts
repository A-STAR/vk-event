import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'accepted',
  templateUrl: './accepted.component.html',
  styleUrls: ['./accepted.component.scss']
})
export class AcceptedComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  event(event) {
    console.log('event', event);

    event = {
      id: 77,
      pending: false
    };

    const { id, pending } = event;

    this.router
      .navigate([ '/event', id ], { queryParams: { pending } });
  }

}
