import { Component, OnChanges, OnInit, ViewChild, ElementRef, HostBinding, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'event-modal',
  templateUrl: './event-modal.component.html',
  styleUrls: ['./event-modal.component.scss']
})
export class EventModalComponent implements OnChanges, OnInit {

  heading: string;
  confirm: string;

  constructor(private elementRef: ElementRef) { }

  @HostBinding() private hidden;
  @HostBinding('class.show') private show;

  @ViewChild('confirmation') private confirmation: ElementRef;
  @ViewChild('cancellation') private cancellation: ElementRef;

  @Output() private dismiss: EventEmitter<boolean> = new EventEmitter();

  open() {
    this.hidden = false;
    setTimeout(() => this.show = true, 0);
  }

  ngOnChanges() {
    this.open();
  }

  ngOnInit() {
    this.hidden = true;
    this.show = false;
  }

  private close(value) {
    this.show = false;
    setTimeout(() => {
      this.dismiss.emit(value);
      this.hidden = true;
    }, 300);
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
