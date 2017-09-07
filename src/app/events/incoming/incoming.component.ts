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
    this.router
      .navigate(['/events']);
    console.log('navigate');
  }

}
