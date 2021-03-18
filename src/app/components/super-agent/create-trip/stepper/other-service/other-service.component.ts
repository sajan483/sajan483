import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-other-service',
  templateUrl: './other-service.component.html',
  styleUrls: ['./other-service.component.scss']
})
export class OtherServiceComponent implements OnInit {
  myForm: FormGroup;
  arr: FormArray;
  submitted = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      arr: this.fb.array([this.createItem()]),
      visaservice: ['',Validators.required],
      adultpricevisa: ['',Validators.required],
      childpricevisa: ['',Validators.required],
      country: ['',Validators.required],
    })
  }

  createItem() {
    return this.fb.group({
      category: ['',Validators.required],
      name: ['',Validators.required],
      description: ['',Validators.required],
      price: ['',Validators.required]
    })
  }
  removeItem(i){
    this.arr.removeAt(i);
  }

  addItem() {
    this.arr = this.myForm.get('arr') as FormArray;
    this.arr.push(this.createItem());
  }

  get f() { return this.myForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.myForm.invalid) {
        return;
    }
  }

}
