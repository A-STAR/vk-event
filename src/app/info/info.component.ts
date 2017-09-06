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

  constructor() {}

  ngOnInit() {
    this.go = false;
    this.showButton = true;
    this.buttonText = 'Пойти';
  }

  onGo(event) {
    this.go = true;
    this.buttonText = 'Вы идёте';
    setTimeout(() => this.showButton = false, 3000);
  }

}
