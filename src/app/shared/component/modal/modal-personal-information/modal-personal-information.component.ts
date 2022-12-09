import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-personal-information',
  templateUrl: './modal-personal-information.component.html',
  styleUrls: ['./modal-personal-information.component.scss']
})
export class ModalPersonalInformationComponent implements OnInit {

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
  }

}
