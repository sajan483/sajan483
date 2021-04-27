import { FormGroup, FormBuilder, Validators } from '@angular/forms'

export class subBranchAdapter {
    fb: FormBuilder;

    constructor(){}

    createBranchForm(){
        this.fb = new FormBuilder();
        return this.fb.group({
            name: ["", Validators.required],
            email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
            phone: ["",[Validators.required, Validators.pattern("[0-9]{10}$")],],
        })
    }

    paymentBody(value:any,advance:number){
        var body ={
            "advance_amount":advance,
	        "adults":+sessionStorage.getItem("bookAdult"),
	        "children_with_bed":0,
	        "children_without_bed":+sessionStorage.getItem("bookChildWithoutBed"),
	        "infants":+sessionStorage.getItem("bookInfant"),
	        "contactinfo": {
                "title": "Mr",
                "first_name": value.name,
                "phone_number": value.phone,
                "email": value.email,
                "is_guest": true
            }
        }
        return body;
    }
}