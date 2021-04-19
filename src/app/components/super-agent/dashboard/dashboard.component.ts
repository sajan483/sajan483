import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';
import { Router } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  cities = [];
  selectedItem = [];
  dropdownSettings: any = {};

  constructor(public router: Router) { }

  ngOnInit() {
    this.multiSelction();
    this.chartSale();
  }

  multiSelction(){
    this.cities = ['Jan 2020', 'Feb 2020', 'Mar 2020', 'Apr 2020', 'May'];
    this.selectedItem = ['Dec 2020'];
    this.dropdownSettings = {
        singleSelection: true,
        selectAllText: 'Select All',
        unSelectAllText: 'UnSelect All',
        allowSearchFilter: false,
        closeDropDownOnSelection: true
    };
}
chartSale(){
    var myChart = new Chart("myChart", {
        type: 'doughnut',
        data: {
            labels: ['Active Packages','Sales'],
            datasets: [{
                label: '# of Votes',
                data: [35, 65],
                backgroundColor: [
                    '#e2a8a6',
                    '#8ac95a'
                ],
                borderWidth: 1
            }]
        },
        
    });
}

navigate(link: any) {
    this.router.navigate([link]);
  }
}
