import { FormControl, FormGroup, Validators } from "@angular/forms";

export class ApplyModel {
    applyModelForm = new FormGroup(
        {
            jobseekerId: new FormControl(0, [Validators.required]),
            jobseekerResume: new FormControl('', [Validators.required]),
            jobName: new FormControl(''),
            recruiterCompany: new FormControl('')
        }
    );
}