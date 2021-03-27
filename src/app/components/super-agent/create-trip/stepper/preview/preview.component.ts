import { Component, OnInit } from '@angular/core';
import { SuperAgentApiService } from 'src/app/Services/super-agent-api-services';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {
  SuperAgentApiService:SuperAgentApiService;
  packageId:number=7023;
  onwardFlight: any;
  returnFlight: any;
  visa: any;
  transport: any;
  otherService: any;
  response: any;
  itinerary: any;

  constructor(private _SuperAgentService:SuperAgentApiService) { 
    this.SuperAgentApiService=this._SuperAgentService;
  }

  ngOnInit() {
    this.SuperAgentApiService.getPackageDetails(this.packageId).subscribe((data)=>{
      this.response = data;
      this.onwardFlight = this.response.trip_flights[0].onward_flight;
      this.returnFlight = this.response.trip_flights[0].return_flight;
      this.visa = this.response.trip_visa;
      this.transport = this.response.trip_transportation;
      this.otherService = this.response.other_services;
      this.itinerary = this.response.itinerary_set;
    })
  }

}
