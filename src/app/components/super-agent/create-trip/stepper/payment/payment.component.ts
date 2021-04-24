import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { SuperAgentApiService } from 'src/app/Services/super-agent-api-services';
import { StepperAdapter } from 'src/app/adapters/super-agent/stepper-adapter';
import { AppStore } from 'src/app/stores/app.store'
import { StepperComponent } from '../stepper.component';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  advancepayment : FormGroup;
  submitted = false;
  SuperAgentApiService:SuperAgentApiService;
  StepperAdapter : StepperAdapter;
  suggestedAmound: any;
  bttnactive: boolean = false;

  constructor(private formBuilder: FormBuilder,private _SuperAgentService:SuperAgentApiService,
    private appStore:AppStore,private stepper:StepperComponent) { 
    this.SuperAgentApiService=this._SuperAgentService;
    this.StepperAdapter = new StepperAdapter(null);
  }

  ngOnInit() {
    this.callSuggestedAmount();
    this.advancepayment = this.StepperAdapter.paymentUpdateForm();
  }

  /**
   * this method for call suggested amounts
   */
  callSuggestedAmount(){
    this.SuperAgentApiService.getPackageDetails(sessionStorage.getItem('packageId')).subscribe((data)=>{
      this.suggestedAmound = data;
    })
  }

  get f(){return this.advancepayment.controls}

  /**
   * this method for update price values
   */
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.advancepayment.invalid) {
        return;
    }
    this.bttnactive = true;
    
    /**
     * payment detail update package api
     */
    this.SuperAgentApiService.updatePackageAPI(this.advancepayment.value,this.appStore.currencyCode,this.appStore.langCode,sessionStorage.getItem('packageId')).subscribe((data)=>{
      sessionStorage.setItem('selector','otherInfo')
        this.stepper.stepContent('otherInfo','');
        this.bttnactive = false;
    })
  }

  back(){
    this.stepper.stepContent('otherServices','')
    sessionStorage.setItem('selector','otherServices')
  }

}
