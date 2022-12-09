import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobService } from 'src/app/services/job/job.service';
import { HomeModel } from './model/home.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  value = '';

  homeModel = new HomeModel();

  constructor(
    private readonly router: Router,
    public readonly jobService : JobService,
  ) { }

  ngOnInit(): void {
    this.jobService.getRecentJob().subscribe(
      (response) => {
        this.homeModel.recentJobs = response.data;
      },
      (error) => {

      }
    );
  }

  submitLogin() {
    this.router.navigate(["login"]);
  };

}
