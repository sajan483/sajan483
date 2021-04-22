import { HelperService } from "src/app/common/services/helper-service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";


export class StepperAdapter {
  fb: FormBuilder;
  helperService: HelperService;
  searchData:any
    

  constructor(private _helperService: HelperService) {this.helperService = _helperService;}

  /**
   * method for creating hotel search request
   */
  hotelSearchRequest(city: any,dataFromSearchPage: any,hotelSearchForm: FormGroup) {
    if (dataFromSearchPage) {
      if(city == 'MAKKA'){
        var body = {
          check_in_date:
          dataFromSearchPage.mekkahData.checkIn,
          check_out_date:dataFromSearchPage.mekkahData.checkOut,
          location: city,
        };
        return body;
      }

      if(city == 'MADEENA'){
        var body = {
          check_in_date: dataFromSearchPage.mekkahData.checkIn,
          check_out_date: dataFromSearchPage.mekkahData.checkOut,
          location: city,
        };
        return body;
      }
    }
    if(hotelSearchForm) {
      var body = {
        check_in_date: hotelSearchForm.get("hotelCheckInDate").value.toJSON().split("T")[0],
        check_out_date:hotelSearchForm.get("hotelCheckOutDate").value.toJSON().split("T")[0],
        location: city
      };
      return body;
    }
  }

  /**
   * this method for validating transport form group
   */
  transportBookingForm(): FormGroup {
    this.fb = new FormBuilder();
    return this.fb.group({
      depdate: ["", Validators.required],
      cabservice: ["", Validators.required],
      cabtype: ["", Validators.required],
      route: ["", Validators.required],
      personpervehicle: ["", Validators.required],
      amoundperperson: ["", Validators.required],
    });
  }

  /**
   * this methode for booking transport request
   * @param transportSelection 
   * @param currency 
   */
  transportBookingBody(transportSelection,currency){
    console.log("1");
    
    var data ={
      trip_transportation: {
        trip_vehicles: [
          {
            currency: currency,
            vehicle_type: transportSelection.cabtype,
            category_code: transportSelection.cabservice,
            pax_per_vehicle: transportSelection.personpervehicle,
            price_per_pax: transportSelection.amoundperperson,
          },
        ],
        route:transportSelection.route,
        travel_date:this.helperService.dateFormaterYMd(transportSelection.depdate),
        company_code: transportSelection.cabservice,
        num_of_days: transportSelection.numberofDays,
      },
    };
    return data;
  }

  /**
   * this method for validating other service form group
   */
  otherServiceBookingForm() :FormGroup{
    this.fb = new FormBuilder();
    return this.fb.group({
      arr: this.fb.array([this.createItem()]),
      visaservice: ['',Validators.required],
      adultpricevisa: ['',Validators.required],
      childpricevisa: ['',Validators.required]
    })
  }
  /**
   * this method for validating other service form array
   */
  createItem():FormGroup {
    return this.fb.group({
      category: [''],
      name: [''],
      description: [''],
      price: [''],
    })
  }
  /**
   * other service booking body
   */
  otherServiceBookingBody(arrayvalue,myForm,currency){
    var other : any[]=[];
    arrayvalue.forEach(element => {
      const y = {
        'currency': currency,
        'price': element.price,
        'additional_service':{
          'name' : element.name,
          'description': element.description,
          'category_id': element.category
        },
      }
      other.push(y)
    });
    var body ={
      "other_services":other,
    }
    return body; 
  }

  /**
   * visa service body
   */
  visaServiceBody(myForm,currency){
    var price: number = +myForm.adultpricevisa;
    var kidPrice: number = +myForm.childpricevisa;
    var body ={
      "trip_visa": {
        'visa_type': myForm.visaservice, 
        'price': price,
        'infant_price': kidPrice,
        'currency': currency,
        'title':'visa'
      }
    }
    return body;
  }

  /**
   * payment update form
   */
  paymentUpdateForm():FormGroup{
    this.fb = new FormBuilder();
    return this.fb.group({
      'adult_price': ['', Validators.required],
      'child_with_bed_price': ['', Validators.required],
      'child_without_bed_price': ['', Validators.required],
      'advance_pct': ['', Validators.required],
    })
  }

  /**
   * this method for other service form group
   */
  otherInfoForm():FormGroup{
    this.fb = new FormBuilder();
    return this.fb.group({
      'title': ['', Validators.required],
      'overview': ['', Validators.required],
      'exclusion': ['', Validators.required],
      'inclusion': ['', Validators.required],
      'polices': ['', Validators.required],
      'itinerary':this.fb.array([this.itinerySet()])
    })
  }
  /**
   * this method for other itinerary form array
   */
  itinerySet():FormGroup{
    return this.fb.group({
      'days': ['', Validators.required],
      'itinerary_title': ['', Validators.required],
      'depdate': ['', Validators.required],
      'itinerary_overview': ['', Validators.required],
      'urlList': this.fb.array([])
    })
  }
  /**
   * other info body
   * @param item form value
   */
  otherInfoBody(item){
    var body;
    body ={
      'title': item.title, 
      'instructions': item.overview, 
      'exclusions': item.exclusion, 
      'inclusions': item.inclusion,
      'terms':item.polices
    }
    return body;
  }
  /**
   * itinerary body
   * @param item 
   * @param array itinerary images
   */
  itineraryBody(item,array){
    let param =[]
    for(let i = 0; i < item.length ; i++){
      let body ={
        'title': item[i].itinerary_title,
        'noOfDays': item[i].days,
        'from_date': this.helperService.dateFormaterYMd(item[i].depdate),
        'details': item[i].itinerary_overview,
        'attachments': array.filter(x=>x.itinerary_id == i)
      }
      param.push(body);
    }
    return param;
  }
  /**For hotel save request
   * @param selectedHotel hotel details
   * @param makkahRoomVariation selected room
   * @param city city makkah or medinah
   */
  saveHotelRequest(selectedHotel,makkahRoomVariation,city) {
    if(city == 'MAKKA'){
      let body = {
        makkah_trip_hotel: {
          hotel: {
            name: selectedHotel.name,
            address: selectedHotel.meta_data.address,
            longitute: selectedHotel.meta_data.longitude,
            latitude: selectedHotel.meta_data.latitude,
            phone_number: selectedHotel.meta_data.phone,
            email: selectedHotel.meta_data.email,
            state: selectedHotel.meta_data.state,
            city: selectedHotel.meta_data.city,
            user_review: selectedHotel.meta_data.rating,
            provider: selectedHotel.provider,
            vendor: selectedHotel.vendor,
            code: selectedHotel.code,
            umrah_code: selectedHotel.umrah_hotel_code,
            images: selectedHotel.meta_data.images,
            amenities: selectedHotel.meta_data.amenities,
            policies: selectedHotel.policies,
          },
          room_variations: makkahRoomVariation,
          check_in_time: selectedHotel.check_in_time,
          check_out_time: selectedHotel.check_out_time,
          other_data: selectedHotel.other_data,
        },
      };
      return body;
    }
    if(city == 'MADEENA'){
      let body = {
        medinah_trip_hotel: {
          hotel: {
            name: selectedHotel.name,
            address: selectedHotel.meta_data.address,
            longitute: selectedHotel.meta_data.longitude,
            latitude: selectedHotel.meta_data.latitude,
            phone_number: selectedHotel.meta_data.phone,
            email: selectedHotel.meta_data.email,
            state: selectedHotel.meta_data.state,
            city: selectedHotel.meta_data.city,
            user_review: selectedHotel.meta_data.rating,
            provider: selectedHotel.provider,
            vendor: selectedHotel.vendor,
            code: selectedHotel.code,
            umrah_code: selectedHotel.umrah_hotel_code,
            images: selectedHotel.meta_data.images,
            amenities: selectedHotel.meta_data.amenities,
            policies: selectedHotel.policies,
          },
          room_variations: makkahRoomVariation,
          check_in_time: selectedHotel.check_in_time,
          check_out_time: selectedHotel.check_out_time,
          other_data: selectedHotel.other_data,
        },
      };
      return body;
    }
  }

  /**
   * For selected hotel request
   * @param item selected room info
   * @param city makkah or medinah
   */
  selectedHotelRequest(item,city){
    var searchData = JSON.parse(sessionStorage.getItem('searchData'))
    if(city == 'MAKKA'){
      var bodyMk = {
        checkin_date :searchData.mekkahData.checkIn,
        checkout_date :searchData.mekkahData.checkOut,
        location : city,
        providers:item.providers,
        hotel_name: item.name,
        umrah_hotel_code:item.umrah_hotel_code,
      }
      return bodyMk;
    }

    if(city == 'MADEENA'){
     var bodyMd = {
      checkin_date :searchData.medinaData.checkIn,
      checkout_date :searchData.medinaData.checkOut,
        location : city,
        providers:item.providers,
        hotel_name: item.name,
        umrah_hotel_code:item.umrah_hotel_code,
      }
      return bodyMd;
    }
  }
}