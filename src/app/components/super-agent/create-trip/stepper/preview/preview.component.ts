import { Component, OnInit } from '@angular/core';
import { SuperAgentApiService } from 'src/app/Services/super-agent-api-services';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {
  SuperAgentApiService:SuperAgentApiService;
  packageId:number=7023;

  constructor(private _SuperAgentService:SuperAgentApiService) { 
    this.SuperAgentApiService=this._SuperAgentService;
  }

  ngOnInit() {
    this.SuperAgentApiService.getPackageDetails(this.packageId).subscribe((data)=>{
    })
  }

}
