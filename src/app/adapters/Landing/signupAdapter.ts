import { FormGroup, FormBuilder, Validators } from '@angular/forms'
export class signupAdapter{
    fb : FormBuilder;
    constructor() { }

    createSignupGroup(): FormGroup{
        this.fb = new FormBuilder();
        return this.fb.group({
            cmpnyname: ['', Validators.required],
            phnnumber: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            cmpnyadress: ['', Validators.required],
            city: ['', Validators.required],
            state: ['', Validators.required],
            cname: ['', Validators.required],
            phnnumberp: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]],
            cnfrmpasswrd: ['', Validators.required],
        })
    }
}