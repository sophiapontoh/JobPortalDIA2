import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ModalUploadCvComponent } from './modal/modal-upload-cv/modal-upload-cv.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalAddExperienceComponent } from './modal/modal-add-experience/modal-add-experience.component';
import { ModalAddEducationComponent } from './modal/modal-add-education/modal-add-education.component';
import { ModalPersonalInformationComponent } from './modal/modal-personal-information/modal-personal-information.component';
import { ModalVerifyModule } from './modal/modal-verify/modal-verify.module'

@NgModule({
  declarations: [
    ModalUploadCvComponent,
    ModalAddExperienceComponent,
    ModalAddEducationComponent,
    ModalPersonalInformationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    ModalVerifyModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ComponentModule { }
