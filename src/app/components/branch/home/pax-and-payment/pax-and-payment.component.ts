import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { subBranchAdapter } from 'src/app/adapters/branch/SubBranchAdapter';
import { BranchApiService } from 'src/app/Services/branch-api-service';

@Component({
  selector: 'app-pax-and-payment',
  templateUrl: './pax-and-payment.component.html',
  styleUrls: ['./pax-and-payment.component.scss']
})
export class PaxAndPaymentComponent implements OnInit {
  totalAmount: number;
  advanceAmount: number;
  advancePct:number;
  id:any;
  countAdult: number;
  countInfant: number;
  countChildWithoutBed: number;
  packageDetails: any;
  contactInfoForm:FormGroup;
  branchAdapter:subBranchAdapter;
  submitted = false;
  packageId: any;

  constructor(private route:Router,private fb: FormBuilder, private branchService: BranchApiService,private activeRouter:ActivatedRoute) {
      this.branchAdapter = new subBranchAdapter();
     }

  ngOnInit() {
    this.contactInfoForm = this.branchAdapter.createBranchForm();
    this.calculation();
    this.id = this.activeRouter.params.subscribe(data=>{
      this.id = data['id'];
      this.branchService.getPackageDetails(this.id).subscribe((data)=>{
        this.packageDetails = data;
        this.packageId = data.id;
      })
    });
  }

  calculation(){
    this.countAdult = +sessionStorage.getItem("bookAdult");
    this.countInfant = +sessionStorage.getItem("bookInfant");
    this.countChildWithoutBed = +sessionStorage.getItem("bookChildWithoutBed");
    this.totalAmount = +sessionStorage.getItem("totoalPrice");
    this.advancePct = +sessionStorage.getItem("advancePct")
    this.advanceAmount = (this.advancePct / 100)*this.totalAmount;
  }

  get f(){return this.contactInfoForm.controls}

  onSubmit(){
    this.submitted = true;

    if (this.contactInfoForm.invalid) {
      return;
    }

    var body = this.branchAdapter.paymentBody(this.contactInfoForm.value,this.advanceAmount);
    this.branchService.bookPackage(body,this.packageId).subscribe((data)=>{
      console.log(data)
      sessionStorage.setItem("bookingId",data.id);
      this.route.navigate(["/branch/"+this.packageId+"/success"]);
    })
  }

  navigateConfirm(){
    this.route.navigate(["/branch/confirmation"])
  }
}
