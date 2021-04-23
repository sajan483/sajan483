import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';
import { Router } from "@angular/router";
import { SuperAgentApiService } from 'src/app/Services/super-agent-api-services';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  months = [];
  selectedItem = [];
  dropdownSettings: any = {};
  dashboardData: any;

  constructor(public router: Router,public superAgentApiService:SuperAgentApiService) { }

  ngOnInit() {
    this.multiSelction();
    
    this.fetchSalesOverView('')
  }

  fetchSalesOverView(month){
    this.superAgentApiService.getSalesOverView(month).subscribe(data=>{
      console.log('data',data)
      this.dashboardData = data;
      this.months = this.dashboardData.available_months
      this.chartSale();
    });
  }
  
  multiSelction(){
    this.selectedItem = ['Apr 2021'];
    this.dropdownSettings = {
        singleSelection: true,
        selectAllText: 'Select All',
        unSelectAllText: 'UnSelect All',
        allowSearchFilter: false,
        closeDropDownOnSelection: true
    };
  }

  onItemSelect(mnth) {this.fetchSalesOverView(mnth[0])}

  chartSale(){
      var myChart = new Chart("myChart", {
          type: 'doughnut',
          data: {
              labels: ['Active Packages','Sales'],
              datasets: [{
                  label: '# of Votes',
                  data: [this.dashboardData.sales_overview.activate_package_percentage, this.dashboardData.sales_overview.sales_percentage],
                  backgroundColor: [
                      '#e2a8a6',
                      '#8ac95a'
                  ],
                  borderWidth: 1
              }]
          },
          
      });
  }

  navigate(link: any) {this.router.navigate([link]);}
}
