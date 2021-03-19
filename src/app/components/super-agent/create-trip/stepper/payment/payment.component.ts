import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  advancepayment : FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.validation();
  }

  validation(){
    this.advancepayment = this.formBuilder.group({
      adultcost: ['', Validators.required],
      bedkidcost: ['', Validators.required],
      kidcost: ['', Validators.required],
      advance: ['', Validators.required],
    })
  }

  get f(){return this.advancepayment.controls}

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.advancepayment.invalid) {
        return;
    }
  }
}
