import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'step1',
  templateUrl: './step-1.component.html',
  styleUrls: ['./step-1.component.scss']
})
export class Step1Component implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  submit(event) {
    event.preventDefault();
    this.next();
  }

  next() {
    this.router
      .navigate(['step-2'], {relativeTo: this.route});
  }

}
