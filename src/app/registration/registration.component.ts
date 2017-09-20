import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

  deactivate() {
    this.renderer
      .setProperty(document.body, 'scrollTop', 0);
  }

}
