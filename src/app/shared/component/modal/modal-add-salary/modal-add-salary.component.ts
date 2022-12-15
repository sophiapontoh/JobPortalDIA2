import { CurrencyPipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProfileModel } from 'src/app/module/admin/profile/model/profile.model';
import { AddSalaryService } from 'src/app/services/add-salary/add-salary.service';
import { LoginService } from 'src/app/services/login/login.service';
import { AddSalaryModel } from './model/add-salary.model';

@Component({
  selector: 'app-modal-add-salary',
  templateUrl: './modal-add-salary.component.html',
  styleUrls: ['./modal-add-salary.component.scss']
})
export class ModalAddSalaryComponent implements OnInit {

  @Input() closeModal: any;
  salaryModel = new AddSalaryModel();
  submitted: boolean = false;
  profileModel = new ProfileModel

  constructor(
    public activeModal: NgbActiveModal,
    private readonly salaryService: AddSalaryService,
    private readonly loginService: LoginService,
    private activatedRoute: ActivatedRoute,
    private currencyPipe: CurrencyPipe
  ) { }

  ngOnInit(): void {
    this.salaryModel.formGroupEditSalary.valueChanges.subscribe( form => {
      if (form.currentSalary) {
          this.salaryModel.formGroupEditSalary.patchValue({
              currentSalary: this.currencyPipe.transform(form.currentSalary.replace(/\D/g, '').replace(/^0+/, ''), 'IDR', 'symbol', '0.2-2')
      }, {emitEvent: false});
      }
    });
    this.salaryModel.formGroupEditSalary.valueChanges.subscribe( form => {
      if (form.expectedMinimum) {
          this.salaryModel.formGroupEditSalary.patchValue({
            expectedMinimum: this.currencyPipe.transform(form.expectedMinimum.replace(/\D/g, '').replace(/^0+/, ''), 'IDR', 'symbol', '0.2-2')
      }, {emitEvent: false});
      }
    });
    this.salaryModel.formGroupEditSalary.valueChanges.subscribe( form => {
      if (form.expectedMaximum) {
          this.salaryModel.formGroupEditSalary.patchValue({
            expectedMaximum: this.currencyPipe.transform(form.expectedMaximum.replace(/\D/g, '').replace(/^0+/, ''), 'IDR', 'symbol', '0.2-2')
      }, {emitEvent: false});
      }
    });
    }

  editSalary(): void {
    this.activatedRoute.paramMap.subscribe((data: any) => {
      let id = data.params.id,
        params = {
          jobseekerId: id
        }
      console.log(data.params)
      this.salaryService.editSalary(params).subscribe(
        (response: any) => {
          this.salaryService.editSalary(response.data)
          this.submitted = true
       },
      (error) => {
      }
    )
  })
}

  postSalary() {
    this.salaryService.editSalary(this.salaryModel.formGroupEditSalary.value).subscribe(
      (response) => {
        this.salaryService.editSalary(response.data)
        this.submitted = true
      },
      (error) => {
      }
    )
  }

}
