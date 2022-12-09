import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyComponent } from '../apply/apply.component';
import { JobDetailComponent } from '../job-detail/job-detail.component';
import { JobFindComponent } from './job-find.component';

const routes: Routes = [
  {
    path: '',
    component: JobFindComponent,
  },
  {
    path: "detail/:id",
    component: JobDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobFindRoutingModule { }
