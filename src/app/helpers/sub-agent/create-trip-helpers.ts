import { HelperService } from "src/app/common/services/helper-service";
import { TripRoom } from "src/app/models/custome_trip";

export class CreateTripHelper {
    constructor(private helperService:HelperService){}

    /**
     * Method for setting hotel details  to details popup
     * @param data  response
     * @param selectedHotelInfo hotel info
     * @param rooms  room details
     */

    setDataForHotelDeatils(respone:any,selectedHotelInfo:any,rooms:any[]){
       var selectedHotel = respone;
       var isGrouped:boolean;        
       var selectedRoomGroups = [];
       var container:TripRoom = new TripRoom();
       var totalRoomPrice = 0;
        container.diffDays = this.helperService.noOfDaysBetweenTwoDates(selectedHotel.check_in_time,selectedHotel.check_out_time);
        for (let i = 0; i < selectedHotel.room_groups.length; ++i) {
          for (let j = 0;j < selectedHotel.room_groups[i].rooms.length;++j) {
            selectedHotel.room_groups[i].rooms[j].insertedState =
              selectedHotelInfo.city == "Makkah" ? "MAKKA" : "MADEENA";
            selectedHotel.room_groups[i].rooms[
              j
            ].isRoomSelectionChecked = false;
            selectedHotel.room_groups[i].rooms[j].insertedAmount = 
              selectedHotel.room_groups[i].amount
              ? selectedHotel.room_groups[i].amount
              : 0;
          }
        }
        
        var hotelPics = [];
        selectedHotel.meta_data.images.forEach(el => {hotelPics.push(el.image_url)});
        container.hotelPics = hotelPics;
        
        if (!selectedHotel.room_groups[0].is_grouped) {
          container.isGrouped = false;
          isGrouped = false;
        }

        if (selectedHotel.room_groups[0].is_grouped) {
          container.isGrouped = true;
          isGrouped = true;
        }

        if (isGrouped) {
          var grouped: any[] = [];

          selectedHotel.room_groups.forEach((element) => {
            if (element.is_grouped) {
              element.isRoomSelectionChecked = false;
              grouped.push(element);
            }
          });

          rooms.forEach((element) => {
            if (element.child_ages) {
              element.pax_info_str =
                element.adults +
                "ADT_" +
                element.children +
                "CHD_" +
                element.child_ages.sort().join("_");
            } else {
              element.pax_info_str =
                element.adults + "ADT_" + element.children + "CHD_";
            }
          });

          grouped.forEach((x) => {
            x.insertedAvailableCount = x.rooms
              .map((room) => room.available_count)
              .reduce((a, b) => a + b, 0);
          });

          rooms.forEach((el) => {
            grouped.forEach((elmt) => {
              if (elmt.insertedAvailableCount == rooms.length) {
                elmt.rooms.forEach((element) => {
                  if (el.pax_info_str == element.pax_info_str) {
                    selectedRoomGroups.push(elmt);
                  }
                });
              }
            });
          });

          selectedRoomGroups.forEach((x) => {
            x.rooms.forEach((room) => {
              room.adult_number = room.pax_info
                .filter((x) => x.type == "ADT")
                .map((a) => a.quantity)
                .reduce((a, b) => a + b, 0);
              room.child_number = room.pax_info
                .filter((x) => x.type == "CHD")
                .map((a) => a.quantity)
                .reduce((a, b) => a + b, 0);
            });
          });

          selectedRoomGroups = selectedRoomGroups.filter(
            this.helperService.onlyUnique
          );
          container.roomGroups = selectedRoomGroups;
        }
        if (!isGrouped) {
           container.isSelectBtnActive = true;
          var roomGroups: any[] = [];
          for (let i = 0; i < selectedHotel.room_groups.length; i++) {
            if (!selectedHotel.room_groups[i].is_grouped) {
              roomGroups.push(selectedHotel.room_groups[i]);
            }
          }
          for (let i = 0; i < rooms.length; i++) {
            if (rooms[i].child_ages) {
              rooms[i].pax_info_str =
                rooms[i].adults +
                "ADT_" +
                rooms[i].children +
                "CHD_" +
                rooms[i].child_ages.sort().join("_");
            } else {
              rooms[i].pax_info_str =
                rooms[i].adults + "ADT_" + rooms[i].children + "CHD_";
            }
          }
          for (let i = 0; i < rooms.length; i++) {
            for (let j = 0; j < roomGroups.length; j++) {
              if (rooms[i].pax_info_str == roomGroups[j].pax_info_str) {
                selectedRoomGroups.push(roomGroups[j]);
              }
            }
          }
          for (let i = 0; i < selectedRoomGroups.length; i++) {
            for (let j = 0; j < selectedRoomGroups[i].rooms.length; j++) {
              selectedRoomGroups[i].rooms[0].isRoomSelectionChecked = true;
            }
          }
          for (let i = 0; i < selectedRoomGroups.length; i++) {
            for (let j = 0; j < selectedRoomGroups[i].rooms.length; j++) {
              if (selectedRoomGroups[i].rooms[j].isRoomSelectionChecked) {
                totalRoomPrice =
                  totalRoomPrice +
                  selectedRoomGroups[i].rooms[j].amount;
              }
            }
          }
          container.roomCount = rooms.length;
          container.roomPrice = totalRoomPrice;
          selectedRoomGroups.forEach((x) => {
            x.rooms.forEach((room) => {
              room.adult_number = room.pax_info
                .filter((x) => x.type == "ADT")
                .map((a) => a.quantity)
                .reduce((a, b) => a + b, 0);
              room.child_number = room.pax_info
                .filter((x) => x.type == "CHD")
                .map((a) => a.quantity)
                .reduce((a, b) => a + b, 0);
            });
          });
          container.roomGroups = selectedRoomGroups;
        }
        return container;
    }

}