import { Component, OnChanges, OnInit, ViewChild, ElementRef, Input, HostBinding, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'event-modal',
  templateUrl: './event-modal.component.html',
  styleUrls: ['./event-modal.component.scss']
})
export class EventModalComponent implements OnChanges, OnInit {

  heading: string;
  confirm: string;

  constructor(private elementRef: ElementRef) { }

  @Input() @HostBinding() private hidden;

  @HostBinding('class.show') private show;

  @ViewChild('confirmation') private confirmation: ElementRef;
  @ViewChild('cancellation') private cancellation: ElementRef;

  @Output() private dismiss: EventEmitter<boolean> = new EventEmitter();

  private open() {
    if (!this.hidden) {
      setTimeout(() => this.show = true, 0);
    }
  }

  ngOnChanges() {
    this.open();
  }

  ngOnInit() {
    this.show = false;
  }

  private close(value) {
    this.show = false;
    setTimeout(() => this.dismiss.emit(value), 300);
  }

  @HostListener('click', ['$event'])
  private hide(event) {
    if (event.target === this.confirmation.nativeElement) {
      this.close(true);
    } else if (event.target === this.cancellation.nativeElement || event.target === this.elementRef.nativeElement) {
      this.close(null);
    }
  }

}
