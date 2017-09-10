import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'incoming',
  templateUrl: './incoming.component.html',
  styleUrls: ['./incoming.component.scss']
})
export class IncomingComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
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
    this.router
      .navigate(['/events/incoming']);
  }

}
