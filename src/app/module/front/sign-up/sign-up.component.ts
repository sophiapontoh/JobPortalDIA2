import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register/register.service';
import { RegisterModel } from './model/register.model';
import { VerifyEmailService } from 'src/app/services/verify-email/verify-email.service';
import { ToastrService } from 'ngx-toastr';
import { ModalVerifyComponent } from 'src/app/shared/component/modal/modal-verify/modal-verify.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoaderService } from 'src/app/services/loader/loader.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  data: any;
  submitted: boolean = false;
  registerModel = new RegisterModel();
  hide = true;
  hide2 = true;
  isLoading = false;

  toggleLoading = () => {
    this.isLoading = true;

    //Faking an API call
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  };

  constructor(
    private readonly registerService: RegisterService,
    private readonly verifyEmailService: VerifyEmailService,
    private readonly router: Router,
    private toastr: ToastrService,
    private readonly modalService: NgbModal,
    public loader: LoaderService
  ) { }

  ngOnInit(): void {
  }

  checkValidation() {
  }

  onRegister() {
    this.registerService.postRegister(this.registerModel.formGroupRegister.value).subscribe(
      (response) => {
        this.registerService.saveRegisterData(response.data)
        this.verifyEmailService.sendVerificationMail(response.data)
        this.submitted = true
        this.router.navigate(['verif'],{queryParams:{data:this.registerModel.formGroupRegister.controls['jobseekerEmail'].value}})
        this.toastr.success('Success', '')
      },
      (error) => {
        this.toastr.error('Failed', 'Email is already registered', {
          timeOut: 3000,
        });
      }
    )
  }

  verifyEmail() {
    this.verifyEmailService.sendVerificationMail(this.registerModel.formGroupRegister.value).subscribe(
      (response) => {
        this.verifyEmailService.sendVerificationMail(response.data);
        this.submitted = true;
      },
      (error) => {
        // alert("error")
      }
    )
  }

  sendingEmail() {
        this.router.navigate(['verify-again'])
      }
      
  onLogin() {
    this.router.navigate(['login'])
  }

  openModalVerify() {
    const modal = this.modalService.open(
      ModalVerifyComponent, { size: 'md' }
  )}

  
}

