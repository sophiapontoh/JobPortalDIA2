import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http: HttpClient) {
  }

  public getRecentJob(): Observable<any> {
    const url = 'http://54.251.83.205:9091/api/v1/jobseeker/recent';
    return this.http.get(url);
  }

  public getDetailJob(body: any): Observable<unknown> {
    const params = new HttpParams()
      .set('jobId', body.jobId)
      .set('jobStatus', body.jobStatus);
    return this.http.get('http://54.251.83.205:9091/api/v1/jobs/detail', { params: params });
  }

  public postCV(body: any): Observable<any> {
    const params = new HttpParams()
      .set('jobseekerId', body.jobseekerId)
      .set('jobseekerResume', body.jobseekerResume);

    return this.http.post('http://54.251.83.205:9091/api/v1/jobseeker/user/update/resume', params);
  }

}
