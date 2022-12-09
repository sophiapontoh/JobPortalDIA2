import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalVerifyComponent } from './modal-verify.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ModalVerifyComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ModalVerifyComponent
  ]
})
export class ModalVerifyModule { }
