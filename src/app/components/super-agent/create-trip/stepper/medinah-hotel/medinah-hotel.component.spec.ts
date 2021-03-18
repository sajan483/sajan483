import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedinahHotelComponent } from './medinah-hotel.component';

describe('MedinahHotelComponent', () => {
  let component: MedinahHotelComponent;
  let fixture: ComponentFixture<MedinahHotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedinahHotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedinahHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
