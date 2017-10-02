import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'step-2',
  templateUrl: './step-2.component.html',
  styleUrls: ['./step-2.component.scss']
})
export class Step2Component implements OnInit {

  constructor(private location: Location, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  submit(event) {
    event.preventDefault();
    this.next();
  }

  next() {
    this.location
      .replaceState('registration/step-3');

    this.router
      .navigate(['../step-3'], { relativeTo: this.route });
  }

}
