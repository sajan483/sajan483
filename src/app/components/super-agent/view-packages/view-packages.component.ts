import { Component, OnInit } from '@angular/core';
import { BranchApiService } from 'src/app/Services/branch-api-service'

@Component({
  selector: 'app-view-packages',
  templateUrl: './view-packages.component.html',
  styleUrls: ['./view-packages.component.scss']
})
export class ViewPackagesComponent implements OnInit {
  shimmer:boolean = true;
  packages: any;

  constructor(private branchApi:BranchApiService) { }

  ngOnInit() {
    this.branchApi.getPackages().subscribe((data)=>{
      this.packages = data;
      this.shimmer = false;
    })
  }

}
