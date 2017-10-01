import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent implements OnInit {

  start: {
    value: number;
    time: string;
    selected?: boolean
  }[];
  end: {
    value: number;
    time: string;
    selected?: boolean
  }[];

  button: {
    class: string;
    disabled: boolean;
    text: string;
    timeout: any;
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
    this.content();
    this.show();
  }

  content() {
    this.start = [
      { value: 1, time: '10:00' },
      { value: 2, time: '10:30' },
      { value: 3, time: '11:00' },
      { value: 4, time: '11:30' },
      { value: 5, time: '12:00', selected: true },
      { value: 6, time: '12:30' },
      { value: 7, time: '13:00' },
      { value: 8, time: '13:30' },
      { value: 9, time: '14:00' },
      { value: 10, time: '14:30' },
      { value: 11, time: '15:00' },
      { value: 12, time: '15:30' },
      { value: 13, time: '16:00' },
      { value: 14, time: '16:30' },
      { value: 15, time: '17:00' },
      { value: 16, time: '17:30' },
      { value: 17, time: '18:00' },
      { value: 18, time: '18:30' },
      { value: 19, time: '19:00' },
      { value: 20, time: '19:30' },
      { value: 21, time: '20:00' },
      { value: 22, time: '20:30' },
      { value: 23, time: '21:00' },
      { value: 24, time: '21:30' },
      { value: 25, time: '22:00' },
      { value: 26, time: '22:30' },
      { value: 27, time: '23:00' },
      { value: 28, time: '23:30' }
    ];
    this.end = [
      { value: 1, time: '10:00' },
      { value: 2, time: '10:30' },
      { value: 3, time: '11:00' },
      { value: 4, time: '11:30' },
      { value: 5, time: '12:00' },
      { value: 6, time: '12:30' },
      { value: 7, time: '13:00' },
      { value: 8, time: '13:30' },
      { value: 9, time: '14:00' },
      { value: 10, time: '14:30' },
      { value: 11, time: '15:00' },
      { value: 12, time: '15:30' },
      { value: 13, time: '16:00' },
      { value: 14, time: '16:30' },
      { value: 15, time: '17:00' },
      { value: 16, time: '17:30' },
      { value: 17, time: '18:00' },
      { value: 18, time: '18:30' },
      { value: 19, time: '19:00', selected: true },
      { value: 20, time: '19:30' },
      { value: 21, time: '20:00' },
      { value: 22, time: '20:30' },
      { value: 23, time: '21:00' },
      { value: 24, time: '21:30' },
      { value: 25, time: '22:00' },
      { value: 26, time: '22:30' },
      { value: 27, time: '23:00' },
      { value: 28, time: '23:30' }
    ];
  }

  show() {
    this.button.text = 'Сохранить';
    this.button.class = 'btn-primary';
    this.button.disabled = false;
  }

  change(event) {
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
