import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import{agency_Appruvel_detaills} from './agency_Appruvel_detaills';
import { HttpClient} from "@angular/common/http";
import { NgxSpinnerService } from "ngx-spinner";
import Swal from 'sweetalert2';
import { Country } from 'src/app/models/airportList';
import { LandingApiService } from 'src/app/Services/landing-api-services';
import { CommonApiService } from 'src/app/Services/common-api-services';


@Component({
  selector: 'app-upload-docs',
  templateUrl: './upload-docs.component.html',
  styleUrls: ['./upload-docs.component.scss'],
})
export class UploadDocsComponent implements OnInit {
  id: any;
  profile:agency_Appruvel_detaills;
  isiban : boolean = false;
  passportFile = null;
  bankLetter = null;
  contractsign = null;
  isProcess : boolean = true;
  passport : boolean = false;
  bank : boolean = false;
  sign : boolean = false;
  country : Country;
  countrycode : any = '91';
  contract_file: any;
  bank_file: any;
  passport_file: any;
  
  
  constructor(private router:ActivatedRoute,private rout:Router,
    private common: LandingApiService,private http: HttpClient,
    private commonApiService:CommonApiService,
    private spinner: NgxSpinnerService) { }

  passportfile(event){
    this.passportFile = <File>event.target.files[0];
    this.passport_file = this.passportFile.name;
    this.passport = true;
  }

  Bankletter(event){
    this.bankLetter = <File>event.target.files[0];
    this.bank_file = this.bankLetter.name;
    this.bank = true;
  }

  Contract(event){
    this.contractsign = <File>event.target.files[0];
    this.contract_file = this.contractsign.name;
    this.sign = true;
  }
  
  uploaddoc(){
    this.spinner.show();
    if((<HTMLInputElement>document.getElementById("signatory_nameid")).value == "" || 
    (<HTMLInputElement>document.getElementById("passport_numberid")).value == "" || 
    (<HTMLInputElement>document.getElementById("iata_licenseid")).value == "" || 
    (<HTMLInputElement>document.getElementById("mobileid")).value == "" || 
    (<HTMLInputElement>document.getElementById("commercial_regnoid")).value == "" || 
    (<HTMLInputElement>document.getElementById("request_textid")).value == "" ){
      this.spinner.hide();
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please Fill All Details',
      })
      return;
    }
    if(!this.passport || !this.bank || !this.sign){
      this.spinner.hide();
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please Upload All Documents',
      })
      return;
    }
    let q = {
      "signatiureName": (<HTMLInputElement>document.getElementById("signatory_nameid")).value,
      "passportNo": (<HTMLInputElement>document.getElementById("passport_numberid")).value,
      "iataLicence": (<HTMLInputElement>document.getElementById("iata_licenseid")).value,
      "mobileNo": this.countrycode + (<HTMLInputElement>document.getElementById("mobileid")).value,
      "commercialreg": (<HTMLInputElement>document.getElementById("commercial_regnoid")).value,
      "reqstText": (<HTMLInputElement>document.getElementById("request_textid")).value
    }
    this.common.otaUpgrade(this.passportFile, this.bankLetter, this.contractsign, q , this.router.snapshot.params.id).subscribe(Response =>{
      this.spinner.hide();
      Swal.fire({
        icon: 'success',
        title: Response.message,
      })
    }, error => {
      this.spinner.hide();
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Somthing wrong',
      })
    })
  }

  ngOnInit() {
    this.id = this.router.params.subscribe(params => {
      this.id = params['id'];
      this.common.getAgencyApprovedDetails(this.id).subscribe(response =>{
        this.profile = response;
        if(this.profile.is_licence_agent){
          this.isiban = true;
          if(response.approval_requests.length != 0){
              this.isProcess = false;
              let dif = response.approval_requests.length
              if(response.approval_requests[(dif-1)].status == 'requested'){
                this.isProcess = true;
                this.isiban = false;
              }
              if(response.approval_requests[(dif-1)].status == 'rejected'){
                Swal.fire({
                  icon: 'error',
                  title: 'Rejected...',
                  text: response.approval_requests[0].comment,
                });
              }
            }else{
              this.isProcess = false;
            }
        }else{
          this.isiban = false;
          this.isProcess = true;
          if(this.profile.is_approved){
              this.isProcess = false;
              this.isiban = true;
            }
        }
      })
    })
    
    this.commonApiService.getCountries().subscribe(res => {
      this.country = res;
    })
  }

  navigatelogin(){
    this.rout.navigate(["/login"]);
  }

}
