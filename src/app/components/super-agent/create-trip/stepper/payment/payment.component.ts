import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SuperAgentApiService } from 'src/app/Services/super-agent-api-services';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  advancepayment : FormGroup;
  submitted = false;
  packageId:number=7023;
  currency='SAR';
  languge = 'en_US';
  SuperAgentApiService:SuperAgentApiService;

  constructor(private formBuilder: FormBuilder,private _SuperAgentService:SuperAgentApiService) { 
    this.SuperAgentApiService=this._SuperAgentService;
  }

  ngOnInit() {
    this.validation();
  }

  validation(){
    this.advancepayment = this.formBuilder.group({
      adult_price: ['', Validators.required],
      child_with_bed_price: ['', Validators.required],
      child_without_bed_price: ['', Validators.required],
      advance_pct: ['', Validators.required],
    })
  }

  get f(){return this.advancepayment.controls}

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.advancepayment.invalid) {
        return;
    }

    this.SuperAgentApiService.updatePackageAPI(this.advancepayment.value,this.currency,this.languge,this.packageId).subscribe((data)=>{
      
    })
  }
}
