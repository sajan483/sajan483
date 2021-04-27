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
        this.bookingDetails = data[0];
      })
    });
  }

  printPage(){
    const printContent = document.getElementById("printDiv");
    const WindowPrt = window.open('', '', 'left=0,top=0,width=900,height=900,toolbar=0,scrollbars=0,status=0');
    WindowPrt.document.write(printContent.innerHTML);
    WindowPrt.document.close();
    WindowPrt.focus();
    WindowPrt.print();
    WindowPrt.close();
  }
}
