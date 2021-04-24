import { Component, OnInit,ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { BranchApiService } from 'src/app/Services/branch-api-service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  service : any = 'All Months';
  showSelectionPopUp: boolean;
  countAdult: number = 1;
  countChild: number = 0;
  countInfant: number = 0;
  displayTabtravel: boolean;
  @ViewChild("serviceDropDown", { read: ElementRef, static: false })
  serviceDropDown: ElementRef;
  @ViewChild("selectionPopUp", { read: ElementRef, static: false })
  selectionPopUp: ElementRef;
  packages: any[]=[];
  shimmer: boolean =true;
  depatureAirports:any[] = [];

  constructor(private renderer2: Renderer2,private branchApi:BranchApiService,private route:Router) {

    this.renderer2.listen("window", "click", (e: Event) => {
      if (
        (this.selectionPopUp &&
          this.selectionPopUp.nativeElement.contains(e.target)) ||
        (this.serviceDropDown &&
          this.serviceDropDown.nativeElement.contains(e.target))
      ) {
        // Clicked inside plus preventing click on icon
      } else {
        // Clicked outside
        this.showSelectionPopUp = false;
      }
    });
   }

  ngOnInit() {
    this.branchApi.getPackages().subscribe((data)=>{
      data.forEach(element => {
        if(element.title != ""){
          this.packages.push(element);
        }
      });
      this.shimmer = false;
      data.forEach(element =>{
        this.depatureAirports.push(element.boarding_airport)
      })
    })
    console.log(this.depatureAirports)
  }

  showSelectionPopup() {
    this.showSelectionPopUp = !this.showSelectionPopUp;
  }

  onServiceItemChange(value){
    this.service = value;
  }

  /**
   * This method for showing traveller popup
   * 
   */
  showTravelersPopUp() {
    this.displayTabtravel = !this.displayTabtravel;
  }

  /**
   * This method for adding adult count at the traveller popup
   * 
   */
  addAdult() {
    this.countAdult = this.countAdult + 1;
  }

  /**
   * This method for decreasing adult count at the traveller popup
   * 
   */
  minusAdult() {
    if (this.countAdult > 1) {
      this.countAdult = this.countAdult - 1;
    }
  }

  /**
   * This method for adding child count at the traveller popup
   * 
   */
  addChild() {
    this.countChild = this.countChild + 1;
  }

  /**
   * This method for decreasing child count at the traveller popup
   * 
   */
  minusChild() {
    if (this.countChild > 1) {
      this.countChild = this.countChild - 1;
    }
  }

  /**
     * This method for decreasing infant count at the traveller popup
     * 
     */
  minusInfant() {
    if (this.countInfant > 0) {
      this.countInfant = this.countInfant - 1;
    }
  }

  /**
   * This method for adding infant count at the traveller popup
   * 
   */
  addInfant() {
    this.countInfant = this.countInfant + 1;
  }

  viewPackageDetails(id:number){
    this.route.navigate(['/branch/details/'+id])
  }
}
