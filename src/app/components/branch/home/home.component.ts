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
  tempPackages:any[]=[];
  shimmer: boolean =true;
  depatureAirports:any;
  numberOfDays:any;

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
      var airport:string[]=[];
      var days:number[]=[];
      data.forEach(element => {
        if(element.published_to != null){
          this.packages.push(element);
        }
      });
      this.shimmer = false;
      data.forEach(element =>{
        airport.push(element.boarding_airport)
        days.push(element.num_days);
      })
      this.depatureAirports = this.onlyUnique(airport)
      this.numberOfDays = this.onlyUnique(days)
    })
    this.tempPackages = this.packages
  }

  onlyUnique(array) {
    return array.filter(function(elem, index, self) {
      return index == self.indexOf(elem);
    })
  }

  showSelectionPopup() {
    this.showSelectionPopUp = !this.showSelectionPopUp;
  }

  onServiceItemChange(value){
    this.service = value;
  }

  onNoOfDaysSelected(item){this.packages = this.tempPackages;this.packages = this.packages.filter(x => x.num_days <= item)}

  onAirportSelected(item){this.packages = this.tempPackages;this.packages = this.packages.filter(x => x.boarding_airport == item)}

  viewPackageDetails(id:number){this.route.navigate(['/branch/details/'+id])}
}
