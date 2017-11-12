import { Component, OnChanges, OnInit, ViewChild, ElementRef, Input, HostBinding, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'incoming-modal',
  templateUrl: './incoming-modal.component.html',
  styleUrls: ['./incoming-modal.component.scss']
})
export class IncomingModalComponent implements OnChanges, OnInit {

  constructor(private elementRef: ElementRef) { }

  @Input() @HostBinding() private hidden;

  @HostBinding('class.show') private show;

  @ViewChild('postponement') private postponement: ElementRef;
  @ViewChild('confirmation') private confirmation: ElementRef;

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
    if (event.target === this.postponement.nativeElement) {
      this.close(true);
    } else if (event.target === this.confirmation.nativeElement) {
      this.close(false);
    } else {
      this.close(null);
    }
  }

}
