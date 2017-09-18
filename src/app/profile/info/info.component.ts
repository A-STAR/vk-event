import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  buttonText: string;
  buttonClass: string;
  disabledButton: boolean;
  buttonTimeout: any;

  constructor() {}

  ngOnInit() {
    this.show();
  }

  show() {
    this.buttonText = 'Сохранить';
    this.buttonClass = 'btn-primary';
    this.disabledButton = false;
  }

  input(event) {
    if (this.buttonClass === 'btn-primary' && !this.disabledButton) {
      return;
    }
    if (this.buttonClass === 'btn-success') {
      clearTimeout(this.buttonTimeout);
    }
    this.show();
  }

  submit(event) {
    event.preventDefault();
    this.save();
  }

  save() {
    this.buttonText = 'Сохранено';
    this.buttonClass = 'btn-success';
    this.buttonTimeout = setTimeout(() => {
      this.buttonText = 'Сохранить';
      this.buttonClass = 'btn-primary';
      this.disabledButton = true;
    }, 3000);
  }

}
