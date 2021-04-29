import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  shimmer:boolean = true;
  bttnactv:boolean = false;
  countForm: FormGroup;

  constructor(private branchService: BranchApiService,private activeRouter:ActivatedRoute,
    private route:Router,private fb: FormBuilder) { }

  ngOnInit() {
    this.countForm = this.fb.group({
			adult: [1, Validators.required],
			child: [0],
			infant: [0]
    });
    this.getPackageDetails()
  }

  get continues() {
    if(this.countForm.valid && (this.countForm.controls.adult.value + this.countForm.controls.child.value + this.countForm.controls.infant.value) <= this.availabilityCount ){
      return false
    }
    else {
      return true
    }
  }

  get count() { return this.countForm.controls}

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
        sessionStorage.setItem("advancePct",data.advance_pct);
        this.shimmer= false;
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
    this.bttnactv = true;
    sessionStorage.setItem("bookAdult",this.countForm.controls.adult.value);
    sessionStorage.setItem("bookChildWithoutBed",this.countForm.controls.child.value);
    sessionStorage.setItem("bookInfant",this.countForm.controls.infant.value);
    var adult:number = this.countForm.controls.adult.value;
    var childwithoutbed:number = this.countForm.controls.child.value;
    var infant:number = this.countForm.controls.infant.value;
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
        this.bttnactv = false;
        this.route.navigate(["/branch/packages/"+this.branchId+"/payment"])
      })
    });
  }

}
