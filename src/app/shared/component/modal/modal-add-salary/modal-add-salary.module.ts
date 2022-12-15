import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalAddSalaryComponent } from './modal-add-salary.component';



@NgModule({
  declarations: [
    ModalAddSalaryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ModalAddSalaryComponent
  ],
  providers: [
    CurrencyPipe
  ]
})
export class ModalAddSalaryModule { }
