import { CompileStylesheetMetadata } from "@angular/compiler";
import { HelperService } from "src/app/common/services/helper-service";
import { AppStore } from "src/app/stores/app.store";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export class StepperAdapter {
  fb : FormBuilder;
  helperService: HelperService;

  constructor(
    private _helperService: HelperService,
    private appStore: AppStore
  ) {
    this.helperService = _helperService;
  }

  /**
   * method for creating hotel search request
   */
  hotelSearchRequest(city: any,dataFromSearchPage: any,hotelSearchForm: FormGroup) {
    //if (dataFromSearchPage) {
      var body = {
      //   check_in_date: this.helperService.dateFormaterMdy(
      //     dataFromSearchPage.mekkahData.checkIn
      //   ),
      //   check_out_date: this.helperService.dateFormaterMdy(
      //     dataFromSearchPage.mekkahData.checkOut
      //   ),
        check_in_date:"03/23/2021",
        check_out_date:"03/25/2021",
        location: city,
      };
      return body;
    //}
    // if(hotelSearchForm) {
    //   var body = {
    //     check_in_date: this.helperService.dateFormaterMdy(
    //       hotelSearchForm.get("hotelCheckInDate").value
    //     ),
    //     check_out_date: this.helperService.dateFormaterMdy(
    //       hotelSearchForm.get("hotelCheckOutDate").value
    //     ),
    //     location: city,
    //   };
    //   return body;
    // }
  }

  /**
   * this method for validating transport form group
   */
  transportBookingForm() :FormGroup{
    this.fb = new FormBuilder();
    return this.fb.group({
      depdate: ['', Validators.required],
      cabservice: ['', Validators.required],
      cabtype: ['', Validators.required],
      route: ['', Validators.required],
      numberofDays: ['', Validators.required],
      personpervehicle: ['', Validators.required],
      amoundperperson: ['', Validators.required],
    })
  }

  /**
   * this methode for booking transport request
   * @param transportSelection 
   * @param currency 
   * @param ddate travel date
   */
  transportBookingBody(transportSelection,currency){
    var data ={
      trip_transportation: {
        trip_vehicles: [
        {
          currency: currency,
          vehicle_type: transportSelection.cabtype,
          category_code: transportSelection.cabservice,
          pax_per_vehicle: transportSelection.personpervehicle,
          price_per_pax: transportSelection.amoundperperson,
        }
        ],
        route:transportSelection.route,
        travel_date:this.helperService.dateFormaterYMd(transportSelection.depdate),
        company_code: transportSelection.cabservice,
        num_of_days: transportSelection.numberofDays,
        },
    }
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
      childpricevisa: ['',Validators.required],
      country: ['',Validators.required],
    })
  }
  /**
   * this method for validating other service form array
   */
  createItem():FormGroup {
    return this.fb.group({
      category: ['',Validators.required],
      name: ['',Validators.required],
      description: ['',Validators.required],
      price: ['',Validators.required],
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
      "trip_visa": {
        'visa_type': myForm.visaservice, 
        'price': myForm.adultpricevisa, 
        'country': myForm.country, 
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
   * this method for other service form
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
  itinerySet():FormGroup{
    return this.fb.group({
      'days': ['', Validators.required],
      'itinerary_title': ['', Validators.required],
      'depdate': ['', Validators.required],
      'itinerary_overview': ['', Validators.required],
      'urlList': this.fb.array([])
    })
  }
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
}