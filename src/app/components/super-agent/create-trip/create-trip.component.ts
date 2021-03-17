import { Component, DoCheck, OnInit } from '@angular/core';
import { AppStore } from 'src/app/stores/app.store';

@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.component.html',
  styleUrls: ['./create-trip.component.scss'],
  providers: []
})
export class CreateTripComponent implements OnInit, DoCheck {

  showShimmer:boolean
  selector:string = 'flight'

  constructor(private appStore: AppStore) { }

  ngOnInit() {
    if(!this.appStore.showShimmer){
      this.appStore.showShimmer = true,this.showShimmer = true
    }
    document.getElementById(this.selector).style.backgroundColor="#f3ac3c";
  }

  ngDoCheck(){
    if(!this.appStore.showShimmer) {
      this.showShimmer = false;
    } 
  }

  stepContent(component){
    this.selector=component
    document.getElementById(component).style.backgroundColor="#f3ac3c";
  }

}
