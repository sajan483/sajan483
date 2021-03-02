import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentBookingComponent } from './recent-booking.component';

describe('RecentBookingComponent', () => {
  let component: RecentBookingComponent;
  let fixture: ComponentFixture<RecentBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
