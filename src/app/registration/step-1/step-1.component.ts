import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'step1',
  templateUrl: './step-1.component.html',
  styleUrls: ['./step-1.component.scss']
})
export class Step1Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  submit(event) {
    event.preventDefault();
    this.next();
  }

  next() {
    this.router
      .navigate(['registration/step-2']);
  }

}
