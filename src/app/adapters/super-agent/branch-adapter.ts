import { HelperService } from "src/app/common/services/helper-service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

export class BranchAdapter {
    fb: FormBuilder;

    constructor(){}

    createBranchForm(){
        this.fb = new FormBuilder();
        return this.fb.group({
            name: ["", Validators.required],
            contact_person_name: ["", Validators.required],
            phone_number: ["",[Validators.required, Validators.pattern("[0-9]{10}$")],],
            state: ["", Validators.required],
            city: ["", Validators.required],
            agency: ["", Validators.required],
            email: ["", [Validators.required, Validators.email]],
            code: ["", Validators.required],
        })
    }
}