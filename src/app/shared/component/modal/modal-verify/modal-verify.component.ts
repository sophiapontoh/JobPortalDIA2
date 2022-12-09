import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { VerifModel } from 'src/app/module/verif/model/verif.model';
import { VerifyEmailService } from 'src/app/services/verify-email/verify-email.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-verify',
  templateUrl: './modal-verify.component.html',
  styleUrls: ['./modal-verify.component.scss']
})
export class ModalVerifyComponent implements OnInit {

  verifModel = new VerifModel();
  submitted: boolean = false;
  @Input() closeModal: any;
  isUploaded: unknown;

  constructor(
    public activeModal: NgbActiveModal,
    public readonly verifyEmailService: VerifyEmailService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }

  close() {
    this.close
  }

  checkValidation() {
  }

  verifyEmail() {
    this.verifyEmailService.sendVerificationMail(this.verifModel.formGroupRegister.value).subscribe(
      (response) => {
        this.verifyEmailService.sendVerificationMail(response.data);
        this.submitted = true;
      },
      (error) => {
        // alert("error")
      }
    )
  }

}
