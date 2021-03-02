import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Room } from 'src/app/models/visaTypes';
import { NotificationService } from 'src/app/notification.service';
import { AppStore } from 'src/app/stores/app.store';
import { CreateTripComponent } from '../../../create-trip/create-trip.component';


@Component({
  selector: 'app-room-allocation-popup',
  templateUrl: './room-allocation-popup.component.html',
  styleUrls: ['./room-allocation-popup.component.scss']
})

export class RoomAllocationPopupComponent implements OnInit {
  childages: any[] = [];
  userRooms: Room[] = [];
  countAdult:number = 0;
  countChild: number = 0;
  countInfant: number = 0;
  showRoomAllocationPopup: boolean = false;
  steps: [];
  rooms: Room[] = [];
  selecteddaysmakkah: number;
  @Input() dataFromPopUp:any;

  constructor(private appStore:AppStore,
    private notifyService:NotificationService,
    private translate:TranslateService,
    private router:Router) { }
  
  ngOnInit() {
  this.showRoomAllocationPopup = true;
  this.rooms = this.appStore.roomArray;
  console.log("dsds",this.dataFromPopUp)
  /**
   * This method for allocating rooms according to trveller count
   */
    this.setRoomAllocation()
  }

  /**
   * This method for allocating rooms according to trveller count
   */
  setRoomAllocation() {
    this.userRooms = [];
      let adultsPerRoom = 5;
      this.countAdult = this.appStore.adultCount;
      this.countChild = this.appStore.childCount;
      var adult = this.countAdult;
      var child = this.countChild;
      let nofrooms = Math.ceil(adult/ adultsPerRoom);
      let childrenperroom = 4;
      let extrachildrenroom = child % nofrooms;
      let index = 0;
      while (nofrooms > 0) {
        let tempRoom: Room = {
          id: index,
          children: 0,
          child_ages: [],
          pax_info_str:null,
          seq_no:"",
          adults:0
        };
        
        if (adult > 0) {
          if (adult < adultsPerRoom) {
            tempRoom.adults = adult;
          } else {
            tempRoom.adults = adultsPerRoom;
          }
          adult -= adultsPerRoom;
        }

        if (child > 0) {
          if (child < childrenperroom) {
            tempRoom.children = child;
          } else {
            tempRoom.children = childrenperroom;
          }

          child -= childrenperroom;
          if (extrachildrenroom > 0 && extrachildrenroom == nofrooms) {
            tempRoom.children += 1;
            extrachildrenroom -= 1;
            child -= 1;
          }
        }

        index += 1;
        nofrooms -= 1;
        this.userRooms.push(tempRoom);
      }
  }

  /**
   * This method for getting adult count
   */
  getCurrentAdultCount() {
    this.rooms = this.userRooms;
    let total = 0;
    if(this.rooms &&  this.rooms.length > 0){
      this.rooms.forEach((val) => {
        total += val.adults;
      });
    }
    return total;
  }

  /**
   * This method for enable select button
   */
  enableButton() {
    var totalTravlers = this.countAdult + this.countChild;
    let totAdt = 0;
    let totChd = 0;
    let arrayCount = 0;
    if(this.rooms && this.rooms.length > 0){
      this.rooms.forEach((val) => {
        totAdt += val.adults;
        totChd += val.children;
      });
    }
   
    let addTraveler = totAdt + totChd;
    if (totalTravlers != addTraveler) {
      return false;
    } 

    return true;
  }

  /**
   * This method for child age validation
   */
  public childAgeValidation() {
    var x = document.getElementsByClassName("children_age_input");
    let a = [];
    for (let index = 0; index < x.length; index++) {
      if((<HTMLInputElement>x[index]).value != "Select Age"){
        a.push("1")
      }else{
        a.push("0")
      }
    }
    if(a.includes("0")){
      this.notifyService.showWarning(this.translate.instant('Please fill the age of each child'));
      (<HTMLButtonElement>document.getElementById("roomSelectBttn")).disabled = true;
    }else{
      (<HTMLButtonElement>document.getElementById("roomSelectBttn")).disabled = false;
      this.router.navigate(['/createTrip'], { queryParams: { steps: this.dataFromPopUp.steps.join(",")} });
      this.appStore.showRoomAlPopup = false;
    }
    CreateTripComponent.RoomData = this.userRooms;
  }

  /**
   * This method for changing child age values
   */
  childAgeChange(i, j){
    (<HTMLButtonElement>document.getElementById("roomSelectBttn")).disabled = false;
    var q = (<HTMLSelectElement>document.getElementById("childAge_"+i+j+"")).value.split(" ")[0];
    this.rooms[i].child_ages[j] = q;
  }

  /**
   * This method for close room allocation popup
   */
  hideRoomAllocationPopup(){
    this.showRoomAllocationPopup = false;
    this.appStore.showRoomAlPopup = false;
  }

  /**
   * This method for adding rooms
   */
  addRooms() {
    if(this.getCurrentAdultCount() < this.countAdult){
      let tempRoom: Room = {
        id: this.userRooms.length + 1,
        adults: 1,
        children: 0,
        child_ages: [],
        pax_info_str:null,
        seq_no:""
      };
  
      this.userRooms.push(tempRoom);
    }
  }

  /**
   * This method for remove room
   */
  removeRooms(i: number) {
    this.userRooms.splice(i, 1);
  }

  /**
   * This method for adding adults to room
   */
  addAdultToRoom(id: number) {
    console.log(id);
    var i = -1;
    var total = 0;
    this.userRooms.forEach((value, index) => {
      if (value.id == id && value.adults < 6) {
        i = index;
      }
      total += value.adults;
    });
    console.log(i);
    if (i != -1 && total < this.countAdult) {
      this.userRooms[i].adults = this.userRooms[i].adults + 1;
    } else {
      this.notifyService.showWarning(this.translate.instant('maximum number of adult reached'));
    }
  }

  /**
   * This method for removing adults from room
   */
  minusAdultFromRoom(id: number) {
    this.userRooms.forEach((value, index) => {
      if (value.id == id) {
        if (this.userRooms[index].adults > 1) {
          this.userRooms[index].adults = value.adults - 1;
        }
      }
    });
  }

}