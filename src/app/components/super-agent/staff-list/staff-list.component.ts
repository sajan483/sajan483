import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  activePage: number;
  totalPage: number;
  currentPage: number;

  constructor(private _SuperAgentService:SuperAgentApiService,private appStore:AppStore,private route:Router) {
    this.superAgentApiService=this._SuperAgentService;
   }

  ngOnInit() {
    this.paginateStaffList(1);
  }

  paginateStaffList(pageNumber:number){
    this.superAgentApiService.getPaginatedStaffList(pageNumber,this.appStore.langCode).subscribe((data)=>{
      this.staffList = data.results;
      this.totalPage = data.total_pages;
      this.currentPage = data.page;
      this.shimmer = false;
    })
  }

  navigate(){
    this.route.navigate(['/superagent/staff_creation'])
  }

  displayActivePage(activePageNumber: number) {
    console.log(this.totalPage);
    console.log(activePageNumber);
    this.activePage = activePageNumber;
    if(activePageNumber < this.totalPage - 1){
      this.paginateStaffList(this.activePage);
    }
    this.activePage == 0;
  }

}
