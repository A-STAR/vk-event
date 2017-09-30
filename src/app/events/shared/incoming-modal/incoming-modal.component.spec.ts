import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomingModalComponent } from './incoming-modal.component';

describe('IncomingModalComponent', () => {
  let component: IncomingModalComponent;
  let fixture: ComponentFixture<IncomingModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomingModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
