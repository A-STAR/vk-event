import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'step-1',
  templateUrl: './step-1.component.html',
  styleUrls: ['./step-1.component.scss']
})
export class Step1Component implements OnInit {

  image: string;
  name: string;

  constructor(private location: Location, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.content();
  }

  content() {
    this.image = '../../../assets/images/vlad.jpg';
    this.name = 'Резников Владислав';
  }

  submit(event) {
    event.preventDefault();
    this.next();
  }

  next() {
    this.location
      .replaceState('registration/step-2');

    this.router
      .navigate(['step-2'], { relativeTo: this.route });
  }

}
