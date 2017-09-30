import { Component, OnInit, OnChanges, ViewChild, ElementRef, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'event-modal',
  templateUrl: './event-modal.component.html',
  styleUrls: ['./event-modal.component.scss']
})
export class EventModalComponent implements OnInit, OnChanges {

  heading: string;
  confirm: string;

  @ViewChild('confirmation') confirmation: ElementRef;
  @ViewChild('cancellation') cancellation: ElementRef;

  @Input() type: string;

  @Output() dismiss: EventEmitter<boolean> = new EventEmitter();

  @HostListener('click', ['$event']) close(event) {
    if (event.target === this.confirmation.nativeElement) {
      this.dismiss.emit(true);
    } else if (event.target === this.cancellation.nativeElement || event.target === this.elementRef.nativeElement) {
      this.dismiss.emit(null);
    }
  }

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.content();
  }

  content() {
    if (this.type === 'cancel') {
      this.heading = 'Отклонение';
      this.confirm = 'Отклонить';
    } else {
      this.heading = 'Перенос';
      this.confirm = 'Перенести';
    }
  }

}
