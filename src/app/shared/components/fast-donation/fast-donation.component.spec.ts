import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FastDonationComponent } from './fast-donation.component';

describe('FastDonationComponent', () => {
  let component: FastDonationComponent;
  let fixture: ComponentFixture<FastDonationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FastDonationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FastDonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
