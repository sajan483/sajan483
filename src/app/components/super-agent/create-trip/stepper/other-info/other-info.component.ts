import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { SuperAgentApiService } from 'src/app/Services/super-agent-api-services';
import { StepperAdapter } from 'src/app/adapters/super-agent/stepper-adapter';
import { AppStore } from 'src/app/stores/app.store';
import { HelperService } from "src/app/common/services/helper-service";
import { StepperComponent } from '../stepper.component';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-other-info',
  templateUrl: './other-info.component.html',
  styleUrls: ['./other-info.component.scss']
})
export class OtherInfoComponent implements OnInit {
  otherPackageForm:FormGroup;
  StepperAdapter : StepperAdapter;
  submitted = false;
  itinerary:FormArray;
  urls = [];
  tripImg = [];
  itineraryUrlList = [];
  itineraryFiles = [];
  array: any[] = [];
  imageAddButton:boolean = true;
  otherInfoMin:any;
  otherInfoMax:any;
  travelDays: number;
  bttnactive: boolean = false;

  constructor(private SuperAgentService:SuperAgentApiService,private appStore:AppStore,private helperService:HelperService,
    private stepper:StepperComponent) {this.StepperAdapter = new StepperAdapter(this.helperService)}

  /**
   * configuratio settings for rich text editor
   */
   config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '7rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      ['bold']
      ],
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  }

  ngOnInit() {
    this.packageDetails()
    this.otherPackageForm = this.StepperAdapter.otherInfoForm();
    this.otherInfoMin = this.appStore.departureDate;
    this.otherInfoMax = this.appStore.arrivalDate;
    this.travelDays = this.helperService.noOfDaysBetweenTwoDates(this.appStore.departureDate,this.appStore.arrivalDate)
  }

  packageDetails(){
    this.SuperAgentService.getPackageDetails(sessionStorage.getItem('packageId')).subscribe((data)=>{
      console.log(data);
      if(data.title != null) {
        this.otherPackageForm.controls.title.setValue(data.title)
        this.otherPackageForm.controls.exclusion.setValue(data.exclusions)
        this.otherPackageForm.controls.inclusion.setValue(data.inclusions)
        this.otherPackageForm.controls.polices.setValue(data.terms)
        this.otherPackageForm.controls.overview.setValue(data.instructions)
        
        if(data.attachments != []){
          data.attachments.forEach(element => {
            this.urls.push(element.file);
          });
          this.tripImg = data.attachments
          this.imageAddButton = false;
        }
      }
    })
  }

  /**
   * add itinerary array
   */
  addItinerary(){
    this.itinerary = this.otherPackageForm.get('itinerary') as FormArray;
    this.itinerary.push(this.StepperAdapter.itinerySet());
  }

  /**
   * remove itinerary array
   */
  removeItenerary(i){
    this.itinerary.removeAt(i);
  }

  /**
   * add hero image
   */
  addTripImages(event) {
    if (event.target.files && event.target.files[0]) {
        const filesAmount = event.target.files.length;
        for (let i = 0; i < filesAmount; i++) {
                const reader = new FileReader();
                reader.onload = (event:any) => {
                   this.urls.push(event.target.result);
                   this.imageAddButton = false;
                }
            this.tripImg.push({'file':event.target.files[i]})
            reader.readAsDataURL(event.target.files[i]);
        }
        
    }
  }

  /**
   * remove hero image
   */payment
  deleteTripImg(i:number){
    const index = this.urls.indexOf(i);
    this.urls.splice(index,1);
    this.tripImg.splice(index,1);
    this.imageAddButton = true;
  }

  /**
   * delete itinerary image
   */
  deleteImageForItenerary(i,trns){
    trns.urlList.splice(i,1)
    trns.attachmentFile.splice(i,1)
    this.array.slice(i,1)
    this.itineraryFiles.slice(i,1)
  }
  /**
   * add itinerary image
   */
  onSelectDescriptionFile(event,item,index) {
    item.urlList = []
    item.urlFile = []
    if (event.target.files && event.target.files[0]) {
      const filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        const itineraryReader = new FileReader();
        itineraryReader.onload = (event:any) => {  
          this.itineraryUrlList.push({'url':event.target.result,'itinerary_id':index});
          item.urlList = this.itineraryUrlList.filter(x=>x.itinerary_id == index);
        }
        this.itineraryFiles.push({'file':event.target.files[i],'itinerary_id':index})
        item.attachmentFile = this.itineraryFiles.filter(x=>x.itinerary_id == index);
        this.array.push({'file':event.target.files[i],'itinerary_id':index});
        itineraryReader.readAsDataURL(event.target.files[i]);
        
      }
    }
  }

  get f() { return this.otherPackageForm.controls }

  /**
   * get otherPackageForm controls
   */
  getControls() {
    return (this.otherPackageForm.get('itinerary') as FormArray).controls;
  }

  /**
   * submit otherPackageForm form
   */
  onSubmit(){
    this.submitted = true;
    
    // stop here if form is invalid
    if (this.otherPackageForm.invalid) {
      return;
    }
    this.bttnactive = true;
    this.upadteOtherInfo();
    this.postTripImg();
    this.updateItenary();
  }

  postTripImg(){
    this.SuperAgentService.uploadTripImage(this.tripImg,this.appStore.currencyCode,this.appStore.langCode,sessionStorage.getItem('packageId')).subscribe((data)=>{
    })
  }

  upadteOtherInfo(){
    var body= this.StepperAdapter.otherInfoBody(this.otherPackageForm.value);
    this.SuperAgentService.updatePackageAPI(body,this.appStore.currencyCode,this.appStore.langCode,sessionStorage.getItem('packageId')).subscribe((data)=>{
    })
  }

  updateItenary(){
    var body=this.StepperAdapter.itineraryBody(this.f.itinerary.value,this.array);
    this.SuperAgentService.forItinerarySetAPI(body,this.appStore.currencyCode,this.appStore.langCode,sessionStorage.getItem('packageId')).subscribe((data)=>{
      sessionStorage.setItem('selector','preview')
      this.stepper.stepContent('preview','');
      this.bttnactive = false;
    })
    
  }

  getValidity(i){
    return (<FormArray>this.f.itinerary).controls[i].invalid;
  }

  back(){
    this.stepper.stepContent('payment','')
    sessionStorage.setItem('selector','payment')
  }

}