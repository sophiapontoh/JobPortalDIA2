import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-add-education',
  templateUrl: './modal-add-education.component.html',
  styleUrls: ['./modal-add-education.component.scss']
})
export class ModalAddEducationComponent implements OnInit {

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
  }

}
