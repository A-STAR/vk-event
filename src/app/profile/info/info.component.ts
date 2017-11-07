import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  src: string;
  alt: string;
  name: string;
  surname: string;

  button: {
    class: string;
    disabled: boolean;
    text: string;
    timeout: any;
  };

  file: File;

  constructor() {
    this.alt = 'Фото';
    this.button = {
      class: null,
      disabled: null,
      text: null,
      timeout: null
    };
  }

  ngOnInit() {
    this.content();
    this.show();
  }

  content() {
    this.src = 'assets/images/vlad.jpg';
    this.alt = 'Резников Владислав';
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
