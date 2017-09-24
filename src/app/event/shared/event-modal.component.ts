import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'event-modal',
  templateUrl: './event-modal.component.html',
  styleUrls: ['./event-modal.component.scss']
})
export class EventModalComponent implements OnInit {

  @ViewChild('modal') modal: ElementRef;
  @ViewChild('confirmation') confirmation: ElementRef;

  @Output() dismiss: EventEmitter<boolean> = new EventEmitter();

  @HostListener('click', ['$event']) close(event) {
    if (event.target !== this.modal.nativeElement) {
      if (event.target === this.confirmation.nativeElement) {
        this.dismiss.emit(true);
      } else {
        this.dismiss.emit(false);
      }
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
