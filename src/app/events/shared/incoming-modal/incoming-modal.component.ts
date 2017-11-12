import { Component, OnInit, OnChanges, ViewChild, ElementRef, Input, HostBinding, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'incoming-modal',
  templateUrl: './incoming-modal.component.html',
  styleUrls: ['./incoming-modal.component.scss']
})
export class IncomingModalComponent implements OnInit, OnChanges {

  @Input() @HostBinding() private hidden;
  
  @HostBinding('class.show') private show;

  @ViewChild('postponement') private postponement: ElementRef;
  @ViewChild('confirmation') private confirmation: ElementRef;

  @Output() dismiss: EventEmitter<boolean> = new EventEmitter();

  private close(value) {
    this.show = false;
    setTimeout(() => this.dismiss.emit(value), 300);
  }

  @HostListener('click', ['$event']) private hide(event) {
    if (event.target === this.postponement.nativeElement) {
      this.close(true);
    } else if (event.target === this.confirmation.nativeElement) {
      this.close(false);
    } else {
      this.close(null);
    }
  }

  constructor(private elementRef: ElementRef) { }


  ngOnInit() {
    this.show = false;
  }

  private open() {
    if (!this.hidden) {
      setTimeout(() => this.show = true, 0);
    }
  }

  ngOnChanges() {
    this.open();
  }

}
