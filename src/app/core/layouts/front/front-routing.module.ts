import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontLayoutComponent } from './front-layout/front-layout.component';

const routes: Routes = [
  {
    path: '',
    component: FrontLayoutComponent,
    children: [

      {
        path: '',
        loadChildren: () => import('../../../module/front/home/home.module').then((x) => x.HomeModule)
      },
      {
        path: 'login',
        loadChildren: () => import('../../../module/front/login/login.module').then((x) => x.LoginModule)
      },
      {
        path: 'sign-up',
        loadChildren: () => import('../../../module/front/sign-up/sign-up.module').then((x) => x.SignUpModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontRoutingModule { }
