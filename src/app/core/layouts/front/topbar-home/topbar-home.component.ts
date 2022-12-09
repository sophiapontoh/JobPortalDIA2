import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar-home',
  templateUrl: './topbar-home.component.html',
  styleUrls: ['./topbar-home.component.scss']
})
export class TopbarHomeComponent implements OnInit {

  constructor(
    private readonly router: Router
  ) { }

  ngOnInit(): void {
  }

  submitRegister() {
    this.router.navigate(["sign-up"]);
  }

  submitLogin() {
    this.router.navigate(["login"]);
  }

}
