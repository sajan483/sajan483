import { Injectable } from "@angular/core";
import { DatePipe } from "@angular/common"
import { CommonApiService } from "src/app/Services/common-api-services";

@Injectable()

export class HelperService {

    constructor(public datepipe:DatePipe,private common: CommonApiService){}

    /*
    * this method for changing date format to "MM/dd/yyyy"
    */
    dateFormaterMdy(date: any) {
        let latest_date = this.datepipe.transform(date, "MM/dd/yyyy");
        return latest_date;
    }

    /*
    * this method for changing date format to "MM/dd/yyyy,hh:mm a"
    */
    dateFormaterMdyHma(date: Date) {
        let latest_date = this.datepipe.transform(date, "MM/dd/yyyy,hh:mm a");
        return latest_date;
    }

    /*
    * this method for changing date format to "yyyy-MM-dd"
    */
    dateFormaterYMd(date: any) {
        let latest_date = this.datepipe.transform(date, "yyyy-MM-dd");
        return latest_date;
    }

    /*
    * this method for changing date time string to time stamp
    */
    dateTimeStringToTimeStampConverter(date:any){
        var date1 = Date.parse(date);
        return Math.ceil(date1/1000);
    }

     /*
    * this method for finding days between two dates
    */
    noOfDaysBetweenTwoDates(firstDate,secondDate) {
        var a,b,c,d,noOfDays;
        a = this.dateFormaterMdy(firstDate);
        b = this.dateFormaterMdy(secondDate);
        c = new Date(a.split("/")[2],a.split("/")[0] - 1,a.split("/")[1]);
        d = new Date(b.split("/")[2],b.split("/")[0] - 1,b.split("/")[1]);
        return noOfDays = Math.round(Math.abs((c - d) / (24 * 60 * 60 * 1000)));
    }

    /*
    * this method for removing duplicate items
    */
    onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }

    /*
    * this method for increase date by number
    */
    incrementDate(date,days) {
        var d = new Date(date);
        d.setDate(d.getDate() + days);
        return d;
    }
/*
    * this method for increase month by number
    */
    incrimentmonth(date,months){
        var y = new Date(date);
        var z = y.setMonth(y.getMonth() + months)
        return new Date(z);
    }

    /**
     * convert timeStamp to date
     */
    timeStampToDateConversion(s){
        let d = new Date(s*1000) 
        return this.dateFormaterMdy(d)
    }

    daysofTwoDate(dt1,dt2){
      var date1 = new Date(dt1);
      var date2 = new Date(dt2);
      var Difference_In_Time = date2.getTime() - date1.getTime();
      return  Difference_In_Time / (1000 * 3600 * 24);
    }
}