import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

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

  go(event) {
    this.go = true;
    setTimeout(() => this.showButton = false, 3000);
    this.buttonText = 'Вы идёте';
    this.buttonClass = 'btn-success';
  }

}
