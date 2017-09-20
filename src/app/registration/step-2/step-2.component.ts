import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'step2',
  templateUrl: './step-2.component.html',
  styleUrls: ['./step-2.component.scss']
})
export class Step2Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  submit(event) {
    event.preventDefault();
    this.next();
  }

  next() {
    this.router
      .navigate(['registration/step-3']);
  }

}
