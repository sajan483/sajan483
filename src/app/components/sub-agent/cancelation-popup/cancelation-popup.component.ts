import { Component, OnInit,Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubAgentApiService } from 'src/app/Services/sub-agent-api-services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cancelation-popup',
  templateUrl: './cancelation-popup.component.html',
  styleUrls: ['./cancelation-popup.component.scss']
})
export class CancelationPopupComponent implements OnInit {
  static cancellationPopup : boolean;
  @Input() checkCancel: any;
  details: any;
  cancel: any;
  registerForm: FormGroup;
  submitted = false;
  btnactv: boolean;

  constructor(private translate: TranslateService,private formBuilder: FormBuilder,private common: SubAgentApiService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      cancellation_text: ['', Validators.required]
    });
    this.details = this.checkCancel.details;
    this.cancel = this.checkCancel.cancel
  }

  get f() { return this.registerForm.controls; }

  confirmCancellation() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }
    this.btnactv = true;
    let body = {
      "cancellation_reason": (<HTMLTextAreaElement>document.getElementById("confirmCancellationInput")).value
    }
    this.common.getConfirmCancellation(this.details.id, body).subscribe((data) => {
      this.btnactv = true;
      window.location.reload();
      CancelationPopupComponent.cancellationPopup = false;
    },(err)=>{
      this.showAlert(err.error.error)
      console.log(err.error.error)
    });
  }

  showAlert(err){
    Swal.fire({
      icon: 'error',
      text: err,
      confirmButtonText: this.translate.instant('OK')
    })
  }

  closecancelPopup(){
    CancelationPopupComponent.cancellationPopup = false;
  }

}
