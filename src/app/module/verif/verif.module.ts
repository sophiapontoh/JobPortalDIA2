import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerifRoutingModule } from './verif-routing.module';
import { VerifComponent } from './verif.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    VerifComponent
  ],
  imports: [
    CommonModule,
    VerifRoutingModule,
    SharedModule
  ]
})
export class VerifModule { }
