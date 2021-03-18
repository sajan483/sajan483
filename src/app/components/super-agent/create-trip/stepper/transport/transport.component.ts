import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  styleUrls: ['./transport.component.scss']
})
export class TransportComponent implements OnInit {
  transportSelection : FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.validation();
  }
  validation(){
    this.transportSelection = this.formBuilder.group({
      depdate: ['', Validators.required],
      cabservice: ['', Validators.required],
      cabtype: ['', Validators.required],
      route: ['', Validators.required],
      numberofDays: ['', Validators.required],
      personpervehicle: ['', Validators.required],
      amoundperperson: ['', Validators.required],
    })
  }

  get f(){return this.transportSelection.controls}

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.transportSelection.invalid) {
        return;
    }
  }
}
