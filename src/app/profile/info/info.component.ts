import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  button: {
    class: string;
    disabled: boolean;
    text: string;
    timeout: number;
  };

  constructor() {
    this.button = {
      class: null,
      disabled: null,
      text: null,
      timeout: null
    };
  }

  ngOnInit() {
    this.show();
  }

  show() {
    this.button.text = 'Сохранить';
    this.button.class = 'btn-primary';
    this.button.disabled = false;
  }

  input(event) {
    if (this.button.class === 'btn-primary' && !this.button.disabled) {
      return;
    }
    if (this.button.class === 'btn-success') {
      clearTimeout(this.button.timeout);
    }
    this.show();
  }

  submit(event) {
    event.preventDefault();
    this.save();
  }

  save() {
    this.button.text = 'Сохранено';
    this.button.class = 'btn-success';
    this.button.timeout = setTimeout(() => {
      this.button.text = 'Сохранить';
      this.button.class = 'btn-primary';
      this.button.disabled = true;
    }, 3000);
  }

}
