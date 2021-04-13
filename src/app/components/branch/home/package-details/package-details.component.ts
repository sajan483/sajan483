import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-package-details',
  templateUrl: './package-details.component.html',
  styleUrls: ['./package-details.component.scss']
})
export class PackageDetailsComponent implements OnInit {

  fareForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.fareForm = this.fb.group({
			adult: ['', Validators.required],
			child: [0],
			infant: [0]
    });
  }

  get continue() {
    if(this.fareForm.valid){
      return true
    }
    else {
      return false
    }
  }

}
