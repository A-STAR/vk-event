import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  @ViewChild('search') search: ElementRef;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  focus(event) {
    this.search
      .nativeElement
      .focus();
  }

  navigate(event) {
    console.log('navigate');
    this.router
      .navigate(['people']);
  }

}
