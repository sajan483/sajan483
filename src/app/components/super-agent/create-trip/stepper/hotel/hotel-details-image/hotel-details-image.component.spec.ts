import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelDetailsImageComponent } from './hotel-details-image.component';

describe('HotelDetailsImageComponent', () => {
  let component: HotelDetailsImageComponent;
  let fixture: ComponentFixture<HotelDetailsImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelDetailsImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelDetailsImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
