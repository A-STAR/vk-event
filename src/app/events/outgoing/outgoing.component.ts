import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'outgoing',
  templateUrl: './outgoing.component.html',
  styleUrls: ['./outgoing.component.scss']
})
export class OutgoingComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigate(event) {
    console.log('navigate');
    this.router
      .navigate(['events/outgoing']);
  }

}
