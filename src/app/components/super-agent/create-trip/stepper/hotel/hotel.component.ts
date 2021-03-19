import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements OnInit {
  @Input() hotelsList :any

  constructor() { }

  ngOnInit() {
  }

}
