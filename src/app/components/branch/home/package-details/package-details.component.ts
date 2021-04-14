import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BranchApiService } from 'src/app/Services/branch-api-service';

@Component({
  selector: 'app-package-details',
  templateUrl: './package-details.component.html',
  styleUrls: ['./package-details.component.scss']
})
export class PackageDetailsComponent implements OnInit {

  countForm: FormGroup;
  itenerary
  availabilityCount
  maxCount

  constructor(private fb: FormBuilder, private branchService: BranchApiService) { }

  ngOnInit() {
    this.countForm = this.fb.group({
			adult: ['', Validators.required],
			child: [0],
			infant: [0]
    });
    this.getPackageDetails()
  }

  get continue() {
    if(this.countForm.valid){
      return true
    }
    else {
      return false
    }
  }

  get count() { return this.countForm.controls}

  getPackageDetails(){
    this.branchService.getPackageDetails(4670).subscribe((data)=>{
      this.itenerary = data.itinerary_set;
      this.availabilityCount = data.max_passengers - data.booked_count;
      this.maxCount = data.max_passengers
    })
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
    var data = {
      adults : this.countForm.controls.adult.value,
      infants: this.countForm.controls.infant.value,
      children_without_bed: this.countForm.controls.child.value
    }
    this.branchService.bookPackage(data, 4670).subscribe((data)=>{
      console.log(data);
    })
  }

}
