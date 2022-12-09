import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LoginService } from 'src/app/services/login/login.service';
import { LoginModel } from './model/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;
  public showPassword: boolean = false;
  data: any;
  loginModel = new LoginModel();
  isLoading = false;

  toggleLoading = () => {
    this.isLoading = true;

    //Faking an API call
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  };

  constructor(
    private readonly loginService: LoginService,
    private readonly authService: AuthService,
    private readonly router: Router
  ) {
  }

  ngOnInit(): void {
  }

  checkValidation() {
  }

  onLogin() {
    this.loginService.postLogin(this.loginModel.formGroupLogin.value).subscribe(
      (response) => {
        this.authService.saveUserData(response.data.registerJobseekerDTO)
        this.router.navigate(['admin/job-find'])
      },
      (error) => {
        this.loginModel.responseLogin = error.error;
      }
    )
  }

  submitForgot() {
    this.router.navigate(["forgot-password"]);
  }

  signUp() {
    this.router.navigate(['sign-up']);
  }
  
  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}
