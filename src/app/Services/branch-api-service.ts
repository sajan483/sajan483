import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';
import { Headers,Http } from "@angular/http";

@Injectable()
export class BranchApiService{
    BASE_URL:any = environment.baseUrl;
    BASE_URL2:any = environment.baseUrl2;

    options = {
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: "Bearer " + sessionStorage.getItem("accesstoken"),
        }),
    };

    constructor(private http: Http){}

    getPackages(){
      return this.http.get(this.BASE_URL + "packages/", this.options).map(res => res.json());
    }

    getPackageDetails(id){
      return this.http
        .get(this.BASE_URL + "packages/"+id+"/", this.options)
        .map((res) => res.json());
    }

    packagePricing(data, id){
      return this.http
        .post(this.BASE_URL + "packages/"+id+"/prices/", data, this.options)
        .map((res) => res.json());
    }

    bookPackage(data, id){
      return this.http
        .post(this.BASE_URL + "packages/"+id+"/booking/", data, this.options)
        .map((res) => res.json());
    }


}