import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'incoming',
  templateUrl: './incoming.component.html',
  styleUrls: ['./incoming.component.scss']
})
export class IncomingComponent implements OnInit {

  modal: boolean;
  type: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.modal = false;
  }

  navigate(event) {
    console.log('accept');
    this.router
      .navigate(['events/incoming']);
  }

  accept(event) {
    console.log('accept');
  }

  more(event) {
    console.log('more');
    this.type = 'more';
    this.modal = true;
  }

  dismiss(event) {
    console.log('dismiss', event);
    this.modal = false;
  }

}
