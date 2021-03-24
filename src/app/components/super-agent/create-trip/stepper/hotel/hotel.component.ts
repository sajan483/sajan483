import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDatepicker } from '@angular/material';
import { StepperAdapter } from 'src/app/adapters/super-agent/stepper-adapter';
import { NotificationService } from 'src/app/common/services/notification.service';
import { SuperAgentApiService } from 'src/app/Services/super-agent-api-services';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})

export class HotelComponent implements OnInit {
  showHtlModifyBtn:boolean = true;
  hotelSearchForm:FormGroup;
  @Input() hotelsList : any;
  formBuilder:FormBuilder;
  superAgentApiService : SuperAgentApiService;
  showHotelDetails:boolean = false;
  

  @ViewChild('pickerEnd' , {read: undefined, static: false}) pickerEnd: MatDatepicker<Date>;
  private stepperAdapter: StepperAdapter = new StepperAdapter(null,null);
  selectedHotel: any;
  selectedRoomGroups: any[];
  makkaInDate: any;
  makkaHName: any;
  hotelPics: any[];
  hotelPics1: any[];
  hotelPics2: any[];
  moreimages: boolean;
  imageshow: number;
  popupData: any;

  constructor(private fb:FormBuilder,private _superAgentApiService:SuperAgentApiService,
    private notifyService:NotificationService) {
    this.formBuilder = fb;
    this.superAgentApiService = _superAgentApiService;
   }

  ngOnInit() {
    this.setHotelSearchForm();
  }

  setHotelSearchForm(){
    this.hotelSearchForm = this.formBuilder.group({
      hotelCheckInDate :["",Validators.required],
      hotelCheckOutDate : ["",Validators.required]
    });
  }

  get form() { return this.hotelSearchForm.controls; }

  get modifyHotelSearchActive():boolean { return this.hotelSearchForm.invalid ? false : true;}

  modifyHotelSearch(city){
    if(!this.hotelSearchForm.invalid){
      this.showHtlModifyBtn = !this.showHtlModifyBtn;
      this.searchHotels(city)
    }
    
  }

  searchHotels(city){
    this.superAgentApiService.agencyHotelSearch(this.stepperAdapter.hotelSearchRequest(city,null,this.hotelSearchForm),'en-US')
    .subscribe(response =>{
      if(response){
        this.hotelsList = response;
      }
    });
  }

  setHotelCheckOutDateRange(){
    this.pickerEnd.open();
  }

  showHotelDetailsPopUp(item){
    this.showHotelDetails = true;
    this.fetchSelectedHotelInfo(item)
  }

  fetchSelectedHotelInfo(item) {
    // var currency :any = "";
    // var body = {
    //   checkin_date : '03/24/2021',
    //   checkout_date :'03/30/2021' ,
    //   location : "MAKKA",
    //   providers:item.providers,
    //   hotel_name: item.name,
    //   umrah_hotel_code:item.umrah_hotel_code,
    // }
    // this.superAgentApiService
    //   .getPackageHotelInfo(body,'SAR','en-US')
    //   .subscribe((data) => {
    //     this.popupData = data;
    //     console.log("popupdata",this.popupData)
    //   },(error)=>{
    //   this.notifyService.showWarning("No details availabe");
    //   }
    //   );
    this.popupData = {
      "code": "353213",
      "name": "dar al raies",
      "umrah_hotel_code": "4700002958",
      "vendor": "Agoda",
      "provider": "Agoda",
      "currency": "SAR",
      "status": "Available",
      "check_in_time": "2021-03-23T00:00:00",
      "check_out_time": "2021-03-25T00:00:00",
      "free_cancellation_time": null,
      "image": null,
      "banner_image": null,
      "promotion_name": null,
      "category": null,
      "has_special_deal": false,
      "policies": [],
      "optional_amenities": [],
      "room_groups": [
        {
          "group_id": "1",
          "type": "Standard Studio",
          "amount": 227.91,
          "is_grouped": true,
          "has_special_deal": true,
          "policies": [],
          "rooms": [
            {
              "amount": 227.91,
              "sequence": null,
              "board_types": null,
              "is_refundable": "Non-Refundable",
              "name": "Standard Studio",
              "type": null,
              "room_type_code": "118248518",
              "room_category": null,
              "room_id": "118248518_1",
              "description": null,
              "details": null,
              "status": null,
              "available_count": 1,
              "features": [],
              "has_special_deal": true,
              "deal_description": null,
              "max_rooms": 1,
              "per_day_prices": [],
              "fare_summary": [
                {
                  "is_total": false,
                  "name": "Base Price",
                  "amount": 189.92,
                  "currency": "SAR"
                },
                {
                  "is_total": false,
                  "name": "TAX",
                  "amount": 29.93,
                  "currency": "SAR"
                },
                {
                  "is_total": false,
                  "name": "Fees",
                  "amount": 8.06,
                  "currency": "SAR"
                },
                {
                  "is_total": true,
                  "name": "Total Amount",
                  "amount": 227.91,
                  "currency": "SAR"
                },
                {
                  "is_total": false,
                  "name": "Discount",
                  "amount": 74.07,
                  "currency": "SAR"
                }
              ],
              "policies": [],
              "cancellation_policy": {
                "description": "This booking is Non-Refundable and cannot be amended or modified. Failure to arrive at your hotel or property will be treated as a No-Show and will incur a charge of 100% of the booking value (Hotel policy).",
                "title": "Cancellation Policy",
                "is_refundable": false,
                "rules": [
                  {
                    "from_date_time": "2021-03-22T00:00:00",
                    "to_date_time": "2021-03-23T00:00:00",
                    "charge": {
                      "chargeType": "amount",
                      "chargeValue": 227.91,
                      "chargeUnit": "SAR",
                      "chargeAmount": 227.91
                    },
                    "is_noshow": false,
                    "description": "227.91 SAR  will be deducted if cancelled in between 2021-03-22 00:00 and 2021-03-23 00:00. Note: Not applicable in No-Show"
                  }
                ]
              },
              "pax_info": [
                {
                  "quantity": 1,
                  "type": "ADT"
                }
              ],
              "pax_info_str": "1ADT_0CHD_",
              "images": [],
              "extensions": [],
              "room_group_obj": "{\"groupId\": \"1\", \"groupAmount\": 227.91, \"type\": \"Standard Studio\", \"hasSpecialDeal\": true, \"rooms\": [{\"name\": \"Standard Studio\", \"roomTypeCode\": \"118248518\", \"roomToken\": \"eddce7f3-3ed5-ca59-9b36-9715af5ae589\", \"roomId\": \"118248518_1\", \"amount\": 227.91, \"availabilityCount\": 1, \"hasSpecialDeal\": true, \"quantity\": 1, \"paxInfo\": [{\"quantity\": 1, \"type\": \"ADT\"}], \"cancellationPolicy\": {\"isRefundable\": false, \"title\": \"Cancellation Policy\", \"description\": \"This booking is Non-Refundable and cannot be amended or modified. Failure to arrive at your hotel or property will be treated as a No-Show and will incur a charge of 100% of the booking value (Hotel policy).\", \"rules\": [{\"fromDateTime\": \"2021-03-22T00:00:00\", \"toDateTime\": \"2021-03-23T00:00:00\", \"isNoShow\": false, \"charge\": {\"chargeType\": \"amount\", \"chargeValue\": 227.91, \"chargeUnit\": \"SAR\", \"chargeAmount\": 227.91}}]}, \"displayRateInfo\": [{\"amount\": 189.92, \"description\": \"BaseRate\", \"currencyCode\": \"SAR\", \"purpose\": \"1\"}, {\"amount\": 29.93, \"description\": \"TAX\", \"currencyCode\": \"SAR\", \"purpose\": \"7\"}, {\"amount\": 8.06, \"description\": \"Fees\", \"currencyCode\": \"SAR\", \"purpose\": \"6\"}, {\"amount\": 227.91, \"description\": \"TotalAmount\", \"currencyCode\": \"SAR\", \"purpose\": \"10\"}, {\"amount\": 74.07, \"description\": \"Discount\", \"currencyCode\": \"SAR\", \"purpose\": \"3\"}], \"config\": [{\"key\": \"RatesInfo\", \"value\": \"PFJhdGUgZXhjbHVzaXZlPSI5NC45NiIgdGF4PSIxNC45NyIgZmVlcz0iNC4wMyIgaW5jbHVzaXZlPSIxMTMuOTYiIHhtbG5zPSJodHRwOi8veG1sLmFnb2RhLmNvbSIgLz4=\"}, {\"key\": \"RateModel\", \"value\": \"Merchant\"}, {\"key\": \"Blockid\", \"value\": \"eddce7f3-3ed5-ca59-9b36-9715af5ae589\"}, {\"key\": \"RateCate\", \"value\": \"510953\"}], \"flags\": {\"isRefundable\": false, \"allMealsCovered\": false}}], \"flags\": {\"isGroupedRooms\": true}}"
            }
          ],
          "pax_info": null,
          "pax_info_str": null,
          "extensions": []
        },
        {
          "group_id": "2",
          "type": "Deluxe Studio",
          "amount": 257.9,
          "is_grouped": true,
          "has_special_deal": true,
          "policies": [],
          "rooms": [
            {
              "amount": 257.9,
              "sequence": null,
              "board_types": null,
              "is_refundable": "Non-Refundable",
              "name": "Deluxe Studio",
              "type": null,
              "room_type_code": "118248725",
              "room_category": null,
              "room_id": "118248725_1",
              "description": null,
              "details": null,
              "status": null,
              "available_count": 1,
              "features": [],
              "has_special_deal": true,
              "deal_description": null,
              "max_rooms": 1,
              "per_day_prices": [],
              "fare_summary": [
                {
                  "is_total": false,
                  "name": "Base Price",
                  "amount": 214.92,
                  "currency": "SAR"
                },
                {
                  "is_total": false,
                  "name": "TAX",
                  "amount": 33.84,
                  "currency": "SAR"
                },
                {
                  "is_total": false,
                  "name": "Fees",
                  "amount": 9.14,
                  "currency": "SAR"
                },
                {
                  "is_total": true,
                  "name": "Total Amount",
                  "amount": 257.9,
                  "currency": "SAR"
                },
                {
                  "is_total": false,
                  "name": "Discount",
                  "amount": 83.82,
                  "currency": "SAR"
                }
              ],
              "policies": [],
              "cancellation_policy": {
                "description": "This booking is Non-Refundable and cannot be amended or modified. Failure to arrive at your hotel or property will be treated as a No-Show and will incur a charge of 100% of the booking value (Hotel policy).",
                "title": "Cancellation Policy",
                "is_refundable": false,
                "rules": [
                  {
                    "from_date_time": "2021-03-22T00:00:00",
                    "to_date_time": "2021-03-23T00:00:00",
                    "charge": {
                      "chargeType": "amount",
                      "chargeValue": 257.9,
                      "chargeUnit": "SAR",
                      "chargeAmount": 257.9
                    },
                    "is_noshow": false,
                    "description": "257.9 SAR  will be deducted if cancelled in between 2021-03-22 00:00 and 2021-03-23 00:00. Note: Not applicable in No-Show"
                  }
                ]
              },
              "pax_info": [
                {
                  "quantity": 1,
                  "type": "ADT"
                }
              ],
              "pax_info_str": "1ADT_0CHD_",
              "images": [],
              "extensions": [],
              "room_group_obj": "{\"groupId\": \"2\", \"groupAmount\": 257.9, \"type\": \"Deluxe Studio\", \"hasSpecialDeal\": true, \"rooms\": [{\"name\": \"Deluxe Studio\", \"roomTypeCode\": \"118248725\", \"roomToken\": \"245defab-d2b9-0167-d6db-cc2d6b486310\", \"roomId\": \"118248725_1\", \"amount\": 257.9, \"availabilityCount\": 1, \"hasSpecialDeal\": true, \"quantity\": 1, \"paxInfo\": [{\"quantity\": 1, \"type\": \"ADT\"}], \"cancellationPolicy\": {\"isRefundable\": false, \"title\": \"Cancellation Policy\", \"description\": \"This booking is Non-Refundable and cannot be amended or modified. Failure to arrive at your hotel or property will be treated as a No-Show and will incur a charge of 100% of the booking value (Hotel policy).\", \"rules\": [{\"fromDateTime\": \"2021-03-22T00:00:00\", \"toDateTime\": \"2021-03-23T00:00:00\", \"isNoShow\": false, \"charge\": {\"chargeType\": \"amount\", \"chargeValue\": 257.9, \"chargeUnit\": \"SAR\", \"chargeAmount\": 257.9}}]}, \"displayRateInfo\": [{\"amount\": 214.92, \"description\": \"BaseRate\", \"currencyCode\": \"SAR\", \"purpose\": \"1\"}, {\"amount\": 33.84, \"description\": \"TAX\", \"currencyCode\": \"SAR\", \"purpose\": \"7\"}, {\"amount\": 9.14, \"description\": \"Fees\", \"currencyCode\": \"SAR\", \"purpose\": \"6\"}, {\"amount\": 257.9, \"description\": \"TotalAmount\", \"currencyCode\": \"SAR\", \"purpose\": \"10\"}, {\"amount\": 83.82, \"description\": \"Discount\", \"currencyCode\": \"SAR\", \"purpose\": \"3\"}], \"config\": [{\"key\": \"RatesInfo\", \"value\": \"PFJhdGUgZXhjbHVzaXZlPSIxMDcuNDYiIHRheD0iMTYuOTIiIGZlZXM9IjQuNTciIGluY2x1c2l2ZT0iMTI4Ljk1IiB4bWxucz0iaHR0cDovL3htbC5hZ29kYS5jb20iIC8+\"}, {\"key\": \"RateModel\", \"value\": \"Merchant\"}, {\"key\": \"Blockid\", \"value\": \"245defab-d2b9-0167-d6db-cc2d6b486310\"}, {\"key\": \"RateCate\", \"value\": \"510953\"}], \"flags\": {\"isRefundable\": false, \"allMealsCovered\": false}}], \"flags\": {\"isGroupedRooms\": true}}"
            }
          ],
          "pax_info": null,
          "pax_info_str": null,
          "extensions": []
        },
        {
          "group_id": "3",
          "type": "Triple Room",
          "amount": 287.88,
          "is_grouped": true,
          "has_special_deal": true,
          "policies": [],
          "rooms": [
            {
              "amount": 287.88,
              "sequence": null,
              "board_types": null,
              "is_refundable": "Non-Refundable",
              "name": "Triple Room",
              "type": null,
              "room_type_code": "118249168",
              "room_category": null,
              "room_id": "118249168_1",
              "description": null,
              "details": null,
              "status": null,
              "available_count": 1,
              "features": [],
              "has_special_deal": true,
              "deal_description": null,
              "max_rooms": 1,
              "per_day_prices": [],
              "fare_summary": [
                {
                  "is_total": false,
                  "name": "Base Price",
                  "amount": 239.9,
                  "currency": "SAR"
                },
                {
                  "is_total": false,
                  "name": "TAX",
                  "amount": 37.78,
                  "currency": "SAR"
                },
                {
                  "is_total": false,
                  "name": "Fees",
                  "amount": 10.2,
                  "currency": "SAR"
                },
                {
                  "is_total": true,
                  "name": "Total Amount",
                  "amount": 287.88,
                  "currency": "SAR"
                },
                {
                  "is_total": false,
                  "name": "Discount",
                  "amount": 93.56,
                  "currency": "SAR"
                }
              ],
              "policies": [],
              "cancellation_policy": {
                "description": "This booking is Non-Refundable and cannot be amended or modified. Failure to arrive at your hotel or property will be treated as a No-Show and will incur a charge of 100% of the booking value (Hotel policy).",
                "title": "Cancellation Policy",
                "is_refundable": false,
                "rules": [
                  {
                    "from_date_time": "2021-03-22T00:00:00",
                    "to_date_time": "2021-03-23T00:00:00",
                    "charge": {
                      "chargeType": "amount",
                      "chargeValue": 287.88,
                      "chargeUnit": "SAR",
                      "chargeAmount": 287.88
                    },
                    "is_noshow": false,
                    "description": "287.88 SAR  will be deducted if cancelled in between 2021-03-22 00:00 and 2021-03-23 00:00. Note: Not applicable in No-Show"
                  }
                ]
              },
              "pax_info": [
                {
                  "quantity": 1,
                  "type": "ADT"
                }
              ],
              "pax_info_str": "1ADT_0CHD_",
              "images": [],
              "extensions": [],
              "room_group_obj": "{\"groupId\": \"3\", \"groupAmount\": 287.88, \"type\": \"Triple Room\", \"hasSpecialDeal\": true, \"rooms\": [{\"name\": \"Triple Room\", \"roomTypeCode\": \"118249168\", \"roomToken\": \"1223b302-d981-153a-7352-e77c43211a52\", \"roomId\": \"118249168_1\", \"amount\": 287.88, \"availabilityCount\": 1, \"hasSpecialDeal\": true, \"quantity\": 1, \"paxInfo\": [{\"quantity\": 1, \"type\": \"ADT\"}], \"cancellationPolicy\": {\"isRefundable\": false, \"title\": \"Cancellation Policy\", \"description\": \"This booking is Non-Refundable and cannot be amended or modified. Failure to arrive at your hotel or property will be treated as a No-Show and will incur a charge of 100% of the booking value (Hotel policy).\", \"rules\": [{\"fromDateTime\": \"2021-03-22T00:00:00\", \"toDateTime\": \"2021-03-23T00:00:00\", \"isNoShow\": false, \"charge\": {\"chargeType\": \"amount\", \"chargeValue\": 287.88, \"chargeUnit\": \"SAR\", \"chargeAmount\": 287.88}}]}, \"displayRateInfo\": [{\"amount\": 239.9, \"description\": \"BaseRate\", \"currencyCode\": \"SAR\", \"purpose\": \"1\"}, {\"amount\": 37.78, \"description\": \"TAX\", \"currencyCode\": \"SAR\", \"purpose\": \"7\"}, {\"amount\": 10.2, \"description\": \"Fees\", \"currencyCode\": \"SAR\", \"purpose\": \"6\"}, {\"amount\": 287.88, \"description\": \"TotalAmount\", \"currencyCode\": \"SAR\", \"purpose\": \"10\"}, {\"amount\": 93.56, \"description\": \"Discount\", \"currencyCode\": \"SAR\", \"purpose\": \"3\"}], \"config\": [{\"key\": \"RatesInfo\", \"value\": \"PFJhdGUgZXhjbHVzaXZlPSIxMTkuOTUiIHRheD0iMTguODkiIGZlZXM9IjUuMTAiIGluY2x1c2l2ZT0iMTQzLjk0IiB4bWxucz0iaHR0cDovL3htbC5hZ29kYS5jb20iIC8+\"}, {\"key\": \"RateModel\", \"value\": \"Merchant\"}, {\"key\": \"Blockid\", \"value\": \"1223b302-d981-153a-7352-e77c43211a52\"}, {\"key\": \"RateCate\", \"value\": \"510953\"}], \"flags\": {\"isRefundable\": false, \"allMealsCovered\": false}}], \"flags\": {\"isGroupedRooms\": true}}"
            }
          ],
          "pax_info": null,
          "pax_info_str": null,
          "extensions": []
        },
        {
          "group_id": "4",
          "type": "Quadruple Room",
          "amount": 317.87,
          "is_grouped": true,
          "has_special_deal": true,
          "policies": [],
          "rooms": [
            {
              "amount": 317.87,
              "sequence": null,
              "board_types": null,
              "is_refundable": "Non-Refundable",
              "name": "Quadruple Room",
              "type": null,
              "room_type_code": "118249312",
              "room_category": null,
              "room_id": "118249312_1",
              "description": null,
              "details": null,
              "status": null,
              "available_count": 1,
              "features": [],
              "has_special_deal": true,
              "deal_description": null,
              "max_rooms": 1,
              "per_day_prices": [],
              "fare_summary": [
                {
                  "is_total": false,
                  "name": "Base Price",
                  "amount": 264.89,
                  "currency": "SAR"
                },
                {
                  "is_total": false,
                  "name": "TAX",
                  "amount": 41.72,
                  "currency": "SAR"
                },
                {
                  "is_total": false,
                  "name": "Fees",
                  "amount": 11.26,
                  "currency": "SAR"
                },
                {
                  "is_total": true,
                  "name": "Total Amount",
                  "amount": 317.87,
                  "currency": "SAR"
                },
                {
                  "is_total": false,
                  "name": "Discount",
                  "amount": 103.31,
                  "currency": "SAR"
                }
              ],
              "policies": [],
              "cancellation_policy": {
                "description": "This booking is Non-Refundable and cannot be amended or modified. Failure to arrive at your hotel or property will be treated as a No-Show and will incur a charge of 100% of the booking value (Hotel policy).",
                "title": "Cancellation Policy",
                "is_refundable": false,
                "rules": [
                  {
                    "from_date_time": "2021-03-22T00:00:00",
                    "to_date_time": "2021-03-23T00:00:00",
                    "charge": {
                      "chargeType": "amount",
                      "chargeValue": 317.87,
                      "chargeUnit": "SAR",
                      "chargeAmount": 317.87
                    },
                    "is_noshow": false,
                    "description": "317.87 SAR  will be deducted if cancelled in between 2021-03-22 00:00 and 2021-03-23 00:00. Note: Not applicable in No-Show"
                  }
                ]
              },
              "pax_info": [
                {
                  "quantity": 1,
                  "type": "ADT"
                }
              ],
              "pax_info_str": "1ADT_0CHD_",
              "images": [],
              "extensions": [],
              "room_group_obj": "{\"groupId\": \"4\", \"groupAmount\": 317.87, \"type\": \"Quadruple Room\", \"hasSpecialDeal\": true, \"rooms\": [{\"name\": \"Quadruple Room\", \"roomTypeCode\": \"118249312\", \"roomToken\": \"a12a15f2-03e5-252e-ec1a-8c4a1ba0ee23\", \"roomId\": \"118249312_1\", \"amount\": 317.87, \"availabilityCount\": 1, \"hasSpecialDeal\": true, \"quantity\": 1, \"paxInfo\": [{\"quantity\": 1, \"type\": \"ADT\"}], \"cancellationPolicy\": {\"isRefundable\": false, \"title\": \"Cancellation Policy\", \"description\": \"This booking is Non-Refundable and cannot be amended or modified. Failure to arrive at your hotel or property will be treated as a No-Show and will incur a charge of 100% of the booking value (Hotel policy).\", \"rules\": [{\"fromDateTime\": \"2021-03-22T00:00:00\", \"toDateTime\": \"2021-03-23T00:00:00\", \"isNoShow\": false, \"charge\": {\"chargeType\": \"amount\", \"chargeValue\": 317.87, \"chargeUnit\": \"SAR\", \"chargeAmount\": 317.87}}]}, \"displayRateInfo\": [{\"amount\": 264.89, \"description\": \"BaseRate\", \"currencyCode\": \"SAR\", \"purpose\": \"1\"}, {\"amount\": 41.72, \"description\": \"TAX\", \"currencyCode\": \"SAR\", \"purpose\": \"7\"}, {\"amount\": 11.26, \"description\": \"Fees\", \"currencyCode\": \"SAR\", \"purpose\": \"6\"}, {\"amount\": 317.87, \"description\": \"TotalAmount\", \"currencyCode\": \"SAR\", \"purpose\": \"10\"}, {\"amount\": 103.31, \"description\": \"Discount\", \"currencyCode\": \"SAR\", \"purpose\": \"3\"}], \"config\": [{\"key\": \"RatesInfo\", \"value\": \"PFJhdGUgZXhjbHVzaXZlPSIxMzIuNDUiIHRheD0iMjAuODYiIGZlZXM9IjUuNjMiIGluY2x1c2l2ZT0iMTU4Ljk0IiB4bWxucz0iaHR0cDovL3htbC5hZ29kYS5jb20iIC8+\"}, {\"key\": \"RateModel\", \"value\": \"Merchant\"}, {\"key\": \"Blockid\", \"value\": \"a12a15f2-03e5-252e-ec1a-8c4a1ba0ee23\"}, {\"key\": \"RateCate\", \"value\": \"510953\"}], \"flags\": {\"isRefundable\": false, \"allMealsCovered\": false}}], \"flags\": {\"isGroupedRooms\": true}}"
            }
          ],
          "pax_info": null,
          "pax_info_str": null,
          "extensions": []
        },
        {
          "group_id": "5",
          "type": "Two Bedroom Apartment",
          "amount": 461.81,
          "is_grouped": true,
          "has_special_deal": true,
          "policies": [],
          "rooms": [
            {
              "amount": 461.81,
              "sequence": null,
              "board_types": null,
              "is_refundable": "Non-Refundable",
              "name": "Two Bedroom Apartment",
              "type": null,
              "room_type_code": "118248892",
              "room_category": null,
              "room_id": "118248892_1",
              "description": null,
              "details": null,
              "status": null,
              "available_count": 1,
              "features": [],
              "has_special_deal": true,
              "deal_description": null,
              "max_rooms": 1,
              "per_day_prices": [],
              "fare_summary": [
                {
                  "is_total": false,
                  "name": "Base Price",
                  "amount": 384.85,
                  "currency": "SAR"
                },
                {
                  "is_total": false,
                  "name": "TAX",
                  "amount": 60.61,
                  "currency": "SAR"
                },
                {
                  "is_total": false,
                  "name": "Fees",
                  "amount": 16.35,
                  "currency": "SAR"
                },
                {
                  "is_total": true,
                  "name": "Total Amount",
                  "amount": 461.81,
                  "currency": "SAR"
                },
                {
                  "is_total": false,
                  "name": "Discount",
                  "amount": 150.09,
                  "currency": "SAR"
                }
              ],
              "policies": [],
              "cancellation_policy": {
                "description": "This booking is Non-Refundable and cannot be amended or modified. Failure to arrive at your hotel or property will be treated as a No-Show and will incur a charge of 100% of the booking value (Hotel policy).",
                "title": "Cancellation Policy",
                "is_refundable": false,
                "rules": [
                  {
                    "from_date_time": "2021-03-22T00:00:00",
                    "to_date_time": "2021-03-23T00:00:00",
                    "charge": {
                      "chargeType": "amount",
                      "chargeValue": 461.81,
                      "chargeUnit": "SAR",
                      "chargeAmount": 461.81
                    },
                    "is_noshow": false,
                    "description": "461.81 SAR  will be deducted if cancelled in between 2021-03-22 00:00 and 2021-03-23 00:00. Note: Not applicable in No-Show"
                  }
                ]
              },
              "pax_info": [
                {
                  "quantity": 1,
                  "type": "ADT"
                }
              ],
              "pax_info_str": "1ADT_0CHD_",
              "images": [],
              "extensions": [],
              "room_group_obj": "{\"groupId\": \"5\", \"groupAmount\": 461.81, \"type\": \"Two Bedroom Apartment\", \"hasSpecialDeal\": true, \"rooms\": [{\"name\": \"Two Bedroom Apartment\", \"roomTypeCode\": \"118248892\", \"roomToken\": \"30a8a812-fba0-3b54-02d7-df8f2a3059c4\", \"roomId\": \"118248892_1\", \"amount\": 461.81, \"availabilityCount\": 1, \"hasSpecialDeal\": true, \"quantity\": 1, \"paxInfo\": [{\"quantity\": 1, \"type\": \"ADT\"}], \"cancellationPolicy\": {\"isRefundable\": false, \"title\": \"Cancellation Policy\", \"description\": \"This booking is Non-Refundable and cannot be amended or modified. Failure to arrive at your hotel or property will be treated as a No-Show and will incur a charge of 100% of the booking value (Hotel policy).\", \"rules\": [{\"fromDateTime\": \"2021-03-22T00:00:00\", \"toDateTime\": \"2021-03-23T00:00:00\", \"isNoShow\": false, \"charge\": {\"chargeType\": \"amount\", \"chargeValue\": 461.81, \"chargeUnit\": \"SAR\", \"chargeAmount\": 461.81}}]}, \"displayRateInfo\": [{\"amount\": 384.85, \"description\": \"BaseRate\", \"currencyCode\": \"SAR\", \"purpose\": \"1\"}, {\"amount\": 60.61, \"description\": \"TAX\", \"currencyCode\": \"SAR\", \"purpose\": \"7\"}, {\"amount\": 16.35, \"description\": \"Fees\", \"currencyCode\": \"SAR\", \"purpose\": \"6\"}, {\"amount\": 461.81, \"description\": \"TotalAmount\", \"currencyCode\": \"SAR\", \"purpose\": \"10\"}, {\"amount\": 150.09, \"description\": \"Discount\", \"currencyCode\": \"SAR\", \"purpose\": \"3\"}], \"config\": [{\"key\": \"RatesInfo\", \"value\": \"PFJhdGUgZXhjbHVzaXZlPSIxOTIuNDMiIHRheD0iMzAuMzAiIGZlZXM9IjguMTgiIGluY2x1c2l2ZT0iMjMwLjkxIiB4bWxucz0iaHR0cDovL3htbC5hZ29kYS5jb20iIC8+\"}, {\"key\": \"RateModel\", \"value\": \"Merchant\"}, {\"key\": \"Blockid\", \"value\": \"30a8a812-fba0-3b54-02d7-df8f2a3059c4\"}, {\"key\": \"RateCate\", \"value\": \"510953\"}], \"flags\": {\"isRefundable\": false, \"allMealsCovered\": false}}], \"flags\": {\"isGroupedRooms\": true}}"
            }
          ],
          "pax_info": null,
          "pax_info_str": null,
          "extensions": []
        }
      ],
      "config": [
        {
          "key": "searchId",
          "value": "632230822830070000"
        }
      ],
      "extensions": [],
      "other_data": "{\"checkInDate\": \"2021-03-23T00:00:00\", \"checkOutDate\": \"2021-03-25T00:00:00\", \"code\": \"353213\", \"name\": \"dar al raies\", \"umrahHotelCode\": \"4700002958\", \"status\": \"Available\", \"amount\": 227.91, \"amountType\": \"Total\", \"currencyCode\": \"SAR\", \"vendor\": \"Agoda\", \"provider\": \"Agoda\", \"latitude\": 0.0, \"longitude\": 0.0, \"hasSpecialDeal\": false, \"rating\": 4.0, \"metaIncluded\": false, \"config\": [{\"key\": \"searchId\", \"value\": \"632230822830070000\"}], \"tpExtensions\": [], \"flags\": {}, \"displayRateInfo\": [{\"amount\": 189.92, \"description\": \"BaseRate\", \"currencyCode\": \"SAR\", \"purpose\": \"1\"}, {\"amount\": 29.93, \"description\": \"TAX\", \"currencyCode\": \"SAR\", \"purpose\": \"7\"}, {\"amount\": 8.06, \"description\": \"Fees\", \"currencyCode\": \"SAR\", \"purpose\": \"6\"}, {\"amount\": 227.91, \"description\": \"TotalAmount\", \"currencyCode\": \"SAR\", \"purpose\": \"10\"}], \"context_token\": \"0fda926b-9e33-4041-8d1f-a1f814d2daa6\", \"token\": \"f0e18619-0311-4410-11de-8518b2574e59\"}",
      "meta_data": {
        "rating": 4,
        "description": null,
        "latitude": 0,
        "longitude": 0,
        "address": null,
        "state": null,
        "country": null,
        "zip_code": null,
        "phone": null,
        "email": null,
        "fax": null,
        "city": "Makkah",
        "amenities": [],
        "remark": null,
        "images": []
      }
    }
    }
  dateFormater(makkahCheckInDate: any) {
    throw new Error('Method not implemented.');
  }
  makkahCheckInDate(makkahCheckInDate: any) {
    throw new Error('Method not implemented.');
  }
  makkahCheckOutDate(makkahCheckOutDate: any) {
    throw new Error('Method not implemented.');
  }

}