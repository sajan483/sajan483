import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  providers: []
})
export class StepperComponent implements OnInit {

  showShimmer:boolean
  selector:string = 'flight'

  constructor() { }

  ngOnInit() {
    document.getElementById(this.selector).style.backgroundColor="#f3ac3c";
  }

  stepContent(component){
    this.selector=component
    document.getElementById(component).style.backgroundColor="#f3ac3c";
  }

}
