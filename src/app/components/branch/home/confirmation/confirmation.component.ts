import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BranchApiService } from 'src/app/Services/branch-api-service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {
  id:any;
  packageDetails: any;
  countAdult: number;
  countInfant: number;
  countChildWithoutBed: number;
  bookingId: number;
  bookingDetails:any;
  shimmer:boolean=true;

  constructor(private activeRouter:ActivatedRoute,private branchService: BranchApiService) { }

  ngOnInit() {
    this.bookingId = +sessionStorage.getItem("bookingId");
    this.getDetailApi();
  }
  getDetailApi(){
    this.id = this.activeRouter.params.subscribe(data=>{
      this.id = data['id'];
      this.branchService.getPackageDetails(this.id).subscribe((data)=>{
        this.packageDetails = data;
      })
    
      this.branchService.getBookingDetails(this.id,this.bookingId).subscribe((data)=>{
        this.shimmer = false;
        this.bookingDetails = data[0];
      })
    });
  }

  printPage(){
    window.print()
  }
}
