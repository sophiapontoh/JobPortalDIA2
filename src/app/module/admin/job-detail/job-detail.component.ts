import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from 'src/app/services/job/job.service';
import { JobDetailModel } from './model/job-detail-model';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.scss']
})
export class JobDetailComponent implements OnInit {

  jobDetailModel = new JobDetailModel();

  job: any;
  id: any;

  constructor(
    public readonly jobService: JobService,
    public readonly router: Router,
    private activatedRoute: ActivatedRoute
  ) { }


  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe((data: any) => {
      let id = data.params.id,
        params = {
          jobId: id,
          jobStatus: "visible"
        }

      this.jobService.getDetailJob(params).subscribe(
        (response: any) => {
          this.jobDetailModel.singleJobs = response.data;
          this.job = this.jobDetailModel.singleJobs;
          console.log(this.jobDetailModel.singleJobs)
        })
    })
  }

  submitApply() {
    this.job.jobId;
    this.router.navigate([`admin/apply/${this.job.jobId}`]);
  }
}
