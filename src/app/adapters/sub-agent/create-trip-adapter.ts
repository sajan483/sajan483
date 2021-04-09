import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { HelperService } from "src/app/common/services/helper-service";
import { AppStore } from "src/app/stores/app.store";

export class CreateTripAdapter {
  constructor(
    private helperService: HelperService,
    private appStore: AppStore
  ) {}

  /**
   * method for creating hotel search request
   */
  hotelSearchRequest(city: any, userDetails: any) {
    var rooms = this.appStore.roomArray;
    if (rooms && rooms.length > 0) {
      rooms.forEach((item, i) => {
        item.seq_no = i.toString();
        delete item.id;
        delete item.pax_info_str;
      });
    }
    if (userDetails && city == "MAKKA") {
      var body = {
        check_in_date: this.helperService.dateFormaterMdy(
          userDetails.makkahCheckinDate
        ),
        check_out_date: this.helperService.dateFormaterMdy(
          userDetails.makkahCheckoutDate
        ),
        sub_pcc_code: userDetails.subPcc_makkah,
        special_code: userDetails.specialCodeMakkah,
        rooms: rooms,
        location: city,
      };
    }
    if (userDetails && city == "MADEENA") {
      var body = {
        check_in_date: this.helperService.dateFormaterMdy(
          userDetails.madeenaCheckinDate
        ),
        check_out_date: this.helperService.dateFormaterMdy(
          userDetails.madeenaCheckoutDate
        ),
        sub_pcc_code: userDetails.subPcc_medinah,
        special_code: userDetails.specialCodeMedinah,
        rooms: rooms,
        location: city,
      };
    }
    return body;
  }

  /**
   * Method for creating  hotel details request
   */
  selectedHotelInfoRequest(
    selectedLanguage: any,
    selectedHotelInfo: any,
    search: any
  ) {
    if (selectedHotelInfo.city == "Makkah") {
      search = this.appStore.makkahSearchId;
    }
    if (
      selectedHotelInfo.city == "Madina" ||
      selectedHotelInfo.city == "Madinah" ||
      selectedHotelInfo.city == "Medinah"
    ) {
      search = this.appStore.madinahSearchId;
    }
    var body = {
      search: search,
      lang: selectedLanguage,
      providers: selectedHotelInfo.providers,
      hotel_name: selectedHotelInfo.name,
      umrah_hotel_code: selectedHotelInfo.umrah_hotel_code,
      location_code: selectedHotelInfo.location_code,
    };

    return body;
  }

  /**
   *Method for creating  hotel booking request
   */
  bookHotelRequest(
    isGrouped: boolean,
    selectedRoomGroups: any[],
    selectedHotel: any,
    selectedHotelInfo: any
  ) {
    var roomVariations: any = {};
    var roomVariationArray: any[] = [];
    if (!isGrouped) {
      for (let i = 0; i < selectedRoomGroups.length; i++) {
        for (let j = 0; j < selectedRoomGroups[i].rooms.length; j++) {
          if (selectedRoomGroups[i].rooms[j].isRoomSelectionChecked) {
            roomVariations = {};
            let name = "";
            if (selectedRoomGroups[i].rooms[j].name == null) {
              name = "sample";
            }
            if (
              selectedRoomGroups[i].rooms[j].name &&
              selectedRoomGroups[i].rooms[j].name.length > 24
            ) {
              name = selectedHotel.name.substring(0, 20);
            }
            if (
              selectedRoomGroups[i].rooms[j].name &&
              selectedRoomGroups[i].rooms[j].name.length < 24
            ) {
              name = selectedRoomGroups[i].rooms[j].name;
            }
            (roomVariations.currency = selectedHotel.currency),
              (roomVariations.available_rooms =
                selectedRoomGroups[i].rooms[j].available_count);
            (roomVariations.total_rooms =
              selectedRoomGroups[i].rooms[j].max_rooms),
              (roomVariations.max_guests =
                selectedRoomGroups[i].rooms[j].pax_info[0].quantity),
              (roomVariations.title = name),
              (roomVariations.per_room_price =
                selectedRoomGroups[i].rooms[j].amount),
              (roomVariations.custom_pax_info =
                selectedRoomGroups[i].pax_info_str);
            (roomVariations.room_type =
              selectedRoomGroups[i].rooms[j].room_type),
              (roomVariations.description =
                selectedRoomGroups[i].rooms[j].description),
              (roomVariations.room_group_id =
                selectedRoomGroups[i].rooms[j].room_group_id),
              (roomVariations.room_id = selectedRoomGroups[i].rooms[j].room_id),
              (roomVariations.room_group_obj =
                selectedRoomGroups[i].rooms[j].room_group_obj);
            roomVariationArray.push(roomVariations);
          }
        }
      }
    }

    if (isGrouped) {
      for (let i = 0; i < selectedRoomGroups.length; i++) {
        if (selectedRoomGroups[i].isRoomSelectionChecked) {
          for (let j = 0; j < selectedRoomGroups[i].rooms.length; j++) {
            roomVariations = {};
            let name = "";
            if (selectedRoomGroups[i].rooms[j].name == null) {
              name = "sample";
            }
            if (
              selectedRoomGroups[i].rooms[j].name &&
              selectedRoomGroups[i].rooms[j].name.length > 24
            ) {
              name = selectedHotel.name.substring(0, 20);
            }
            if (
              selectedRoomGroups[i].rooms[j].name &&
              selectedRoomGroups[i].rooms[j].name.length < 24
            ) {
              name = selectedRoomGroups[i].rooms[j].name;
            }
            (roomVariations.currency = selectedHotel.currency),
              (roomVariations.available_rooms =
                selectedRoomGroups[i].rooms[j].available_count);
            (roomVariations.total_rooms =
              selectedRoomGroups[i].rooms[j].max_rooms),
              (roomVariations.max_guests =
                selectedRoomGroups[i].rooms[j].pax_info[0].quantity),
              (roomVariations.title = name),
              (roomVariations.per_room_price =
                selectedRoomGroups[i].rooms[j].amount),
              (roomVariations.custom_pax_info =
                selectedRoomGroups[i].rooms[j].pax_info_str);
            (roomVariations.room_type =
              selectedRoomGroups[i].rooms[j].room_type),
              (roomVariations.description =
                selectedRoomGroups[i].rooms[j].description),
              (roomVariations.room_group_id =
                selectedRoomGroups[i].rooms[j].room_group_id),
              (roomVariations.room_id = selectedRoomGroups[i].rooms[j].room_id),
              (roomVariations.room_group_obj =
                selectedRoomGroups[i].rooms[j].room_group_obj);
            roomVariationArray.push(roomVariations);
          }
        }
      }
    }

    var latitude: number = +selectedHotel.meta_data.latitude;
    var longitute: number = +selectedHotel.meta_data.longitude;
    var name = "";
    if (selectedHotel.name.length > 24) {
      name = selectedHotel.name.substring(0, 24);
    }

    if (selectedHotel.name.length < 24) {
      name = selectedHotel.name;
    }
    var body = {};
    if (selectedHotelInfo.city == "Makkah") {
      body = {
        start_date: this.helperService.dateFormaterYMd(
          selectedHotel.check_in_time
        ),
        end_date: this.helperService.dateFormaterYMd(
          selectedHotel.check_out_time
        ),
        arr_date_time_stamp: this.helperService.dateTimeStringToTimeStampConverter(
          selectedHotel.check_in_time
        ),
        adults: this.appStore.adultCount,
        children: this.appStore.childCount,
        country_of_residence: "IN",
        nationality: "IN",
        makkah_trip_hotel: {
          search: this.appStore.makkahSearchId,
          lang: "en-US",
          hotel: {
            name: name ? name : "sample",
            description: selectedHotel.description,
            address: selectedHotel.meta_data.address,
            longitute: longitute.toFixed(6),
            latitude: latitude.toFixed(6),
            phone_number: selectedHotel.meta_data.phone
              ? selectedHotel.meta_data.phone
              : "1232323232",
            email: selectedHotel.meta_data.email,
            state: selectedHotel.meta_data.state
              ? selectedHotel.meta_data.state
              : "MAKKA",
            city: selectedHotel.meta_data.city,
            instructions: "",
            distance: selectedHotel.haram_distance,
            user_review: selectedHotel.meta_data.rating
              ? selectedHotel.meta_data.rating
              : 3.4,
            provider: selectedHotel.provider,
            vendor: selectedHotel.vendor,
            code: selectedHotel.code,
            umrah_code: selectedHotel.umrah_hotel_code,
            images: selectedHotel.meta_data.images,
            amenities: selectedHotel.meta_data.amenities,
            policies: selectedHotel.policies,
          },
          room_variations: roomVariationArray,
          check_in_time: selectedHotel.check_in_time,
          check_out_time: selectedHotel.check_out_time,
          other_data: selectedHotel.other_data,
        },
      };
    }

    if (
      selectedHotelInfo.city == "Madina" ||
      selectedHotelInfo.city == "Madinah" ||
      selectedHotelInfo.city == "Medina"
    ) {
      body = {
        start_date: this.helperService.dateFormaterYMd(
          selectedHotel.check_in_time
        ),
        end_date: this.helperService.dateFormaterYMd(
          selectedHotel.check_out_time
        ),
        arr_date_time_stamp: this.helperService.dateTimeStringToTimeStampConverter(
          selectedHotel.check_in_time
        ),
        adults: this.appStore.adultCount,
        children: this.appStore.childCount,
        country_of_residence: "IN",
        nationality: "IN",
        medinah_trip_hotel: {
          search: this.appStore.madinahSearchId,
          lang: "en-US",
          hotel: {
            name: name ? name : "sample",
            description: selectedHotel.description,
            address: selectedHotel.meta_data.address,
            longitute: longitute.toFixed(6),
            latitude: latitude.toFixed(6),
            phone_number: selectedHotel.meta_data.phone
              ? selectedHotel.meta_data.phone
              : "1232323232",
            email: selectedHotel.meta_data.email,
            state: selectedHotel.meta_data.state
              ? selectedHotel.meta_data.state
              : "MADEENA",
            city: selectedHotel.meta_data.city,
            instructions: "",
            distance: selectedHotel.haram_distance,
            user_review: selectedHotel.meta_data.rating
              ? selectedHotel.meta_data.rating
              : 3.4,
            provider: selectedHotel.provider,
            vendor: selectedHotel.vendor,
            code: selectedHotel.code,
            umrah_code: selectedHotel.umrah_hotel_code,
            images: selectedHotel.meta_data.images,
            amenities: selectedHotel.meta_data.amenities,
            policies: selectedHotel.policies,
          },
          room_variations: roomVariationArray,
          check_in_time: selectedHotel.check_in_time,
          check_out_time: selectedHotel.check_out_time,
          other_data: selectedHotel.other_data,
        },
      };
    }

    return body;
  }

  createTripBookingForm(): FormGroup {
    return new FormGroup({
      title: new FormControl("Mr"),
      first_name: new FormControl("", Validators.required),
      last_name: new FormControl("", Validators.required),
      gender: new FormControl("", Validators.required),
      dob: new FormControl("", Validators.required),
      nationality: new FormControl("", Validators.required),
      passport_no: new FormControl("", Validators.required),
      passport_expiry_date: new FormControl("", Validators.required),
      email: new FormControl("", [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      phone_number: new FormControl("", Validators.required),
      address: new FormControl("", Validators.required),
      country_of_residence: new FormControl("", Validators.required),
    });
  }

  createTripBookingRequest(travellersForm,code,roomRef) {
    let body = {
      title: "Mr",
      first_name:travellersForm.value.first_name,
      last_name: travellersForm.value.last_name,
      dob: travellersForm.value.dob.toJSON().split("T")[0],
      gender: travellersForm.value.gender,
      nationality: travellersForm.value.nationality,
      passport_no: travellersForm.value.passport_no,
      room_reference: roomRef,
      passport_expiry_date:travellersForm.value.passport_expiry_date.toJSON().split("T")[0],
      country_of_residence:"EY",
      contactinfo: {
        title: "Mr",
        first_name:travellersForm.value.first_name,
        last_name: travellersForm.value.last_name,
        email:travellersForm.value.email,
        phone_number:travellersForm.value.phone_number,
        address:travellersForm.value.address,
        country_code:travellersForm.value.country_code,
        phn_country_code: code,
      },
    };
    return body;
  }
}