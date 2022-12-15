import { FormControl, FormGroup, Validators } from "@angular/forms";

export class AddSalaryModel {
    joobseekerId: any;
    formGroupEditSalary = new FormGroup({
        currentCurrency: new FormControl(""),
        expectedCurrency: new FormControl(""),
        currentSalary: new FormControl("", Validators.required),
        expectedMinimum: new FormControl("",  Validators.required),
        expectedMaximum: new FormControl("",  Validators.required)
    });
}