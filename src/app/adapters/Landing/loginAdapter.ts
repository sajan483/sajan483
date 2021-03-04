import { FormGroup, FormBuilder, Validators } from '@angular/forms'
export class loginAdapter {
    fb: FormBuilder ;
    constructor() { }
    createLoginGroup(): FormGroup {
        this.fb = new FormBuilder();
        return  this.fb.group({
            username: [null, Validators.required],
            password: [null, Validators.required]
          })
    }
  }