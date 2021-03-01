import { Component, Input, OnInit } from '@angular/core';
import { IWorker } from '../../models';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html'
})
export class ModalComponent implements OnInit {

  @Input() worker: IWorker;

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
  }

  openModal(modal: any){
    this.modalService.open(modal);
  }
}
