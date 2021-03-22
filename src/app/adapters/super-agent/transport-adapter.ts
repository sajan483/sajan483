import { FormGroup, FormBuilder, Validators } from '@angular/forms';
export class transportAdapter{
    formBuilder:FormBuilder;
    constructor(){}
    
    transportData():FormGroup {
        return this.formBuilder.group({
            depdate: ['', Validators.required],
            cabservice: ['', Validators.required],
            cabtype: ['', Validators.required],
            route: ['', Validators.required],
            numberofDays: ['', Validators.required],
            personpervehicle: ['', Validators.required],
            amoundperperson: ['', Validators.required],
        })
    }
}