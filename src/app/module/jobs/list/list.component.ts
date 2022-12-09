import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from 'src/app/services/job/job.service';
import { ListModel } from './model/list.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  listModel = new ListModel();

  config: any;

  value = '';

  constructor(
    public readonly jobService: JobService,
    public readonly router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.config = {
      currentPage: 1,
      itemsPerPage: 1,
      totalItems: 0,
    }
    activatedRoute.queryParams.subscribe(
      params => this.config.currentPage = params['page'] ? params['page'] : 1
    )
    for (let i = 1; i <= 100; i++) {
      this.listModel.recentJobs.push(`items ${i}`);
    }
  }

  pageChange(newPage: number) {
    this.router.navigate(['/jobs/list'], { queryParams: { page: newPage } });
  }

  ngOnInit(): void {
    this.jobService.getRecentJob().subscribe(
      (response) => {
        this.listModel.recentJobs = response.data;
      },
      (error) => {

      }
    );
  }
}
