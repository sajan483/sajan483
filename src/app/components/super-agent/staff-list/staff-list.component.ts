import { Component, OnInit } from '@angular/core';
import { SuperAgentApiService } from 'src/app/Services/super-agent-api-services';
import { AppStore } from 'src/app/stores/app.store';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.scss']
})
export class StaffListComponent implements OnInit {
  superAgentApiService:SuperAgentApiService;
  staffList:any;
  shimmer:boolean = true;

  constructor(private _SuperAgentService:SuperAgentApiService,private appStore:AppStore) {
    this.superAgentApiService=this._SuperAgentService;
   }

  ngOnInit() {
    this.paginateStaffList(1);
  }

  paginateStaffList(pageNumber:number){
    this.superAgentApiService.getPaginatedStaffList(pageNumber,this.appStore.langCode).subscribe((data)=>{
      this.staffList = data.results;
      this.shimmer = false;
    })
  }

}
