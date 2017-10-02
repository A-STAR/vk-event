import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'incoming-modal',
  templateUrl: './incoming-modal.component.html',
  styleUrls: ['./incoming-modal.component.scss']
})
export class IncomingModalComponent implements OnInit {

  @ViewChild('postponement') postponement: ElementRef;
  @ViewChild('confirmation') confirmation: ElementRef;

  @Output() dismiss: EventEmitter<boolean> = new EventEmitter();

  @HostListener('click', ['$event']) close(event) {
    if (event.target === this.postponement.nativeElement) {
      this.dismiss.emit(true);
    } else if (event.target === this.confirmation.nativeElement) {
      this.dismiss.emit(false);
    } else {
      this.dismiss.emit(null);
    }
  }

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
  }

}
