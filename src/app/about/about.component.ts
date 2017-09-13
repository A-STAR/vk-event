import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  go: boolean;
  buttonText: string;
  buttonClass: string;
  showButton: boolean;

  constructor() {}

  ngOnInit() {
    this.show();
  }

  show() {
    this.go = false;
    this.buttonText = 'Пойти';
    this.buttonClass = 'btn-primary';
    this.showButton = !this.go;
  }

  goTo(event) {
    this.go = true;
    this.buttonText = 'Вы идёте';
    this.buttonClass = 'btn-success';
    setTimeout(() => this.showButton = false, 3000);
  }

}
