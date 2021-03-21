import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDatepicker } from '@angular/material';
import { StepperAdapter } from 'src/app/adapters/super-agent/stepper-adapter';
import { SuperAgentApiService } from 'src/app/Services/super-agent-api-services';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})

export class HotelComponent implements OnInit {
  showHtlModifyBtn:boolean = true;
  hotelSearchForm:FormGroup;
  @Input() hotelsList : any;
  formBuilder:FormBuilder;
  superAgentApiService : SuperAgentApiService;

  @ViewChild('pickerEnd' , {read: undefined, static: false}) pickerEnd: MatDatepicker<Date>;
  private stepperAdapter: StepperAdapter = new StepperAdapter(null,null);

  constructor(private fb:FormBuilder,private _superAgentApiService:SuperAgentApiService) {
    this.formBuilder = fb;
    this.superAgentApiService = _superAgentApiService;
   }

  ngOnInit() {
    this.setHotelSearchForm();
  }

  setHotelSearchForm(){
    this.hotelSearchForm = this.formBuilder.group({
      hotelCheckInDate :["",Validators.required],
      hotelCheckOutDate : ["",Validators.required]
    });
  }

  get form() { return this.hotelSearchForm.controls; }

  get modifyHotelSearchActive():boolean { return this.hotelSearchForm.invalid ? false : true;}

  modifyHotelSearch(city){
    if(!this.hotelSearchForm.invalid){
      this.showHtlModifyBtn = !this.showHtlModifyBtn;
      this.searchHotels(city)
    }
    
  }

  searchHotels(city){
    this.superAgentApiService.agencyHotelSearch(this.stepperAdapter.hotelSearchRequest(city,null,this.hotelSearchForm),'en-US')
    .subscribe(response =>{
      if(response){
        this.hotelsList = response;
      }
    });
  }

  setHotelCheckOutDateRange(){
    this.pickerEnd.open();
  }

}