import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader-hotel-popup',
  templateUrl: './loader-hotel-popup.component.html',
  styleUrls: ['./loader-hotel-popup.component.scss']
})
export class LoaderHotelPopupComponent implements OnInit {
  freeArray = ["1","2","3","4"];
  constructor() { }

  ngOnInit() {
  }

}