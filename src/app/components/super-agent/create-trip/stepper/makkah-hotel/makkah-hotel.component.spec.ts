import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakkahHotelComponent } from './makkah-hotel.component';

describe('MakkahHotelComponent', () => {
  let component: MakkahHotelComponent;
  let fixture: ComponentFixture<MakkahHotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakkahHotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakkahHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
