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

  navigate(event) {
    console.log('navigate');
    this.router
      .navigate(['/events']);
  }

}
