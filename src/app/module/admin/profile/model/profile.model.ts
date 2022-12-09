import { FormControl, FormGroup } from "@angular/forms";

export class ProfileModel {
    // userProfiles: any;
    // skills: any = [];

    // userProfilesModelForm = new FormGroup(
    //     {
    //         jobseekerName: new FormControl(''),
    //         jobseekerEmail: new FormControl(''),
    //         jobseekerAddress: new FormControl(''),
    //         jobseekerProfession: new FormControl(''),
    //         jobseekerPhone: new FormControl(''),
    //         jobseekerCompany: new FormControl(''),
    //         workStartYear: new FormControl(''),
    //         workEndYear: new FormControl(''),
    //         jobseekerPortfolio: new FormControl(''),
    //         jobseekerResume: new FormControl(''),
    //         jobseekerMedsos: new FormControl(''),
    //         jobseekerImage: new FormControl(''),
    //     }
    // );

    // skillsProfileModelForm = new FormGroup(
    //     {
    //         skills: new FormControl('')
    //     }
    // );

    userProfile: any = [];

    skills: any = [];

    addSkill(skill: any) {
    }

    removeSkill(skill: any) {
    }
}