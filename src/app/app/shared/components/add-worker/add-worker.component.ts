import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IWorker, workerType } from '../../models';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-add-worker',
  templateUrl: './add-worker.component.html',
  styleUrls: ['./add-worker.component.css']
})
export class AddWorkerComponent implements OnInit {

  @Output() addedWorker: EventEmitter<IWorker> = new EventEmitter();
  type = workerType;
  addFormGroup: FormGroup;
  mask = ['+', '7', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];
  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
    this.addFormGroup = new FormGroup({
      id: new FormControl(null),
      firstName: new FormControl(null, [Validators.required]),
      secondName: new FormControl(null, [Validators.required]),
      middleName: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null, [Validators.required]),
      birthday: new FormControl(null, [Validators.required]),
      role: new FormControl(0, [Validators.required])
    })
  }

  openModal(modal: any){
    this.modalService.open(modal);
  }

  addWorker(modal: any){
    modal.close('Save click')
    this.addedWorker.emit(this.addFormGroup.value);
  }
}

