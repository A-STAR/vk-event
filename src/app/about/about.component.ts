import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  image: string;
  title: string;
  start: string;
  end: string;
  place: string;
  description: string;

  go: boolean;
  buttonText: string;
  buttonClass: string;
  showButton: boolean;

  constructor() { }

  ngOnInit() {
    this.content();
    this.show();
  }

  content() {
    this.image = 'assets/images/vk-high-score.jpg';
    this.title = 'VK High Score';
    this.start = '12 окт в 11:00';
    this.end = '12 окт в 20:00';
    this.place = 'Yota Arena, Дмитровское ш., 27 к. 1, Москва';
    this.description = `
      <p>Первая конференция для игровых разработчиков ВКонтакте VK High Score пройдёт 12 октября в московском клубе Yota Arena.</p>

      <p>В августе мы запустили мобильную игровую платформу на базе HTML5 — Direct Games и готовы поделиться дальнейшими планами развития игр ВКонтакте.</p>

      <p>В конференции примут участие более 250 человек. Из первых рук Вы узнаете о том, как происходит запуск игровых продуктов и что нового нас ждёт в будущем.</p>

      <p>Кроме того, своим опытом поделятся крупнейшие представители игрового рынка и состоится публичная дискуссия о новых трендах индустрии.</p>

      <p>Оставляйте заявки на участие в приложении <a href="https://vk.cc/78iNlq">vk.cc/78iNlq</a>, если хотите узнать всё об игровой экосистеме ВКонтакте — html5-играх, будущем мобильных игр и последних тенденциях индустрии.</p>
    `;
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
