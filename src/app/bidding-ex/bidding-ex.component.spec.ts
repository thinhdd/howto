import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiddingExComponent } from './bidding-ex.component';

describe('BiddingExComponent', () => {
  let component: BiddingExComponent;
  let fixture: ComponentFixture<BiddingExComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiddingExComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiddingExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
