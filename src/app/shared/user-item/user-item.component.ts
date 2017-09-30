import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent implements OnInit {

  @Input() image: string;
  @Input() name: string;
  @Input() position?: string;
  @Input() status?: string;
  @Input() time?: string;
  @Input() place?: string;

  constructor() { }

  ngOnInit() {
  }

}
