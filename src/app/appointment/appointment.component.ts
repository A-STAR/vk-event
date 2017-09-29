import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {

  heading: string;

  image: string;
  name: string;

  start: { value: number; time: string; selected?: boolean }[];
  end: { value: number; time: string; selected?: boolean }[];

  places: { value: number; place: string; selected?: boolean }[];

  constructor(private location: Location) { }

  ngOnInit() {
    this.content();
  }

  content() {
    this.heading = 'Встреча';
    this.image = '../../../assets/images/victor.jpg';
    this.name = 'Буркин Виктор';
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
    this.places = [
      { value: 1, place: 'Красный зал' },
      { value: 2, place: 'Оранжевый зал' },
      { value: 3, place: 'Жёлтый зал' },
      { value: 4, place: 'Зелёный зал', selected: true },
      { value: 5, place: 'Голубой зал' },
      { value: 6, place: 'Синий зал' },
      { value: 7, place: 'Фиолетовый зал' }
    ];
  }

  back(event) {
    event.preventDefault();
    this.location
      .back();
  }

}
