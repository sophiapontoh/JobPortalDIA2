import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public postLogin(body: any): Observable<any> {
    const params = new HttpParams()
      .set('jobseekerEmail', body.jobseekerEmail)
      .set('jobseekerPassword', body.jobseekerPassword);

    return this.http.post('http://54.251.83.205:9091/api/v1/jobseeker/login', params);
  }

  public forgotPassword(body: any): Observable<any> {
    const params = new HttpParams()
      .set('jobseekerEmail', body.jobseekerEmail);

    return this.http.post('http://54.251.83.205:9091/api/v1/jobseeker/reset', params);
  }

  public changePassword(data: any): Observable<any> {
    const params = new HttpParams()
      .set('email', data.email)
      .set('password', data.password)
      .set('confirmPassword', data.confirmPassword);

    return this.http.post('http://54.251.83.205:9091/api/v1/jobseeker/change-password', data);
  }

  saveChangePasswordData(data: any) {
    sessionStorage.setItem('change-password/:token', JSON.stringify(data))
  }

  public getUserProfile(body: any): Observable<unknown> {
    const params = new HttpParams()
      .set('jobseekerId', body.jobseekerId);
    return this.http.get('http://54.251.83.205:9091/api/v1/jobseeker/user', { params: params });
  }

}
