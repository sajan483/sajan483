import { Component, OnInit } from '@angular/core';
import { SubAgentGeneralHelper } from 'src/app/helpers/sub-agent/general-helper';

@Component({
  selector: 'app-iban-creater',
  templateUrl: './iban-creater.component.html',
  styleUrls: ['./iban-creater.component.scss']
})
export class IbanCreaterComponent implements OnInit {

  value:any = 1234567890123456789012;
  private subagentHelper: SubAgentGeneralHelper = new SubAgentGeneralHelper(null);
  constructor() { }

  ngOnInit() {
  }

  nextiban(){
    console.log(this.value.toFixed());
    
    var ibn = 'SA'.concat(this.value.toString());
    var check = this.subagentHelper.ibanTextValidation(ibn)
    console.log(check);
    // for(let i = this.value;i>0;i++){
    //   var ibn = 'SA'+this.value.toString();
    //   console.log(ibn);
      
    //   var check = this.subagentHelper.ibanTextValidation(ibn)
    // }
  }

}
