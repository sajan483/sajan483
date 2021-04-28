import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BranchApiService } from 'src/app/Services/branch-api-service';

@Component({
  selector: 'app-package-details',
  templateUrl: './package-details.component.html',
  styleUrls: ['./package-details.component.scss']
})
export class PackageDetailsComponent implements OnInit {
  continue:boolean;
  itenerary:any;
  availabilityCount:any;
  maxCount:any;
  id:any;
  packageDetails: any;
  branchId:number;
  adultCount:any = 1;
  infantCount:any = 0;
  chindWithoutBedCount:any = 0;
  availability: number;

  constructor(private branchService: BranchApiService,private activeRouter:ActivatedRoute,
    private route:Router) { }

  ngOnInit() {
    this.getPackageDetails()
  }

  getPackageDetails(){
    this.id = this.activeRouter.params.subscribe(data=>{
      this.id = data['id'];
      this.branchService.getPackageDetails(this.id).subscribe((data)=>{
        this.packageDetails = data;
        this.itenerary = data.itinerary_set;
        this.availabilityCount = data.max_passengers - data.booked_count;
        this.availability = this.availabilityCount;
        this.maxCount = data.max_passengers;
        this.branchId = data.id;
        sessionStorage.setItem("advancePct",data.advance_pct)
      })
    });
  }

  expandItenary(event){
    var panel = event.target.previousElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  }

  bookPackage(){
    sessionStorage.setItem("bookAdult",this.adultCount);
    sessionStorage.setItem("bookChildWithoutBed",this.chindWithoutBedCount);
    sessionStorage.setItem("bookInfant",this.infantCount);
    var adult:number = +this.adultCount;
    var childwithoutbed:number = +this.chindWithoutBedCount;
    var infant:number = +this.infantCount;
    var body = {
      adults : adult,
      infants: infant,
      child_without_bed: childwithoutbed,
      child_with_bed: 0,
      other_services:[]
    }
    
    this.id = this.activeRouter.params.subscribe(data=>{
      this.id = data['id'];
      this.branchService.packagePricing(body, this.id).subscribe((data)=>{
        sessionStorage.setItem("totoalPrice",data.total_price);
        this.route.navigate(["/branch/payment/"+this.branchId])
      })
    });
  }

  selectInfant(value){
    this.infantCount = value;
    this.availability = this.availabilityCount - this.infantCount - this.chindWithoutBedCount - this.adultCount;
  }

  selectAdult(value){
    this.adultCount = value;
    this.availability = this.availabilityCount - this.infantCount - this.chindWithoutBedCount - this.adultCount;
  }

  selectChildWithoutBed(value){
    this.chindWithoutBedCount = value;
    this.availability = this.availabilityCount - this.infantCount - this.chindWithoutBedCount - this.adultCount;
  }
}
