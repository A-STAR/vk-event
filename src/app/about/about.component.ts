import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  go: boolean;
  showButton: boolean;
  buttonText: string;
  buttonClass: string;

  constructor() {}

  ngOnInit() {
    this.go = false;
    this.showButton = !this.go;
    this.buttonText = 'Пойти';
    this.buttonClass = 'btn-primary';
  }

  goTo(event) {
    this.go = true;
    setTimeout(() => this.showButton = false, 3000);
    this.buttonText = 'Вы идёте';
    this.buttonClass = 'btn-success';
  }

}
