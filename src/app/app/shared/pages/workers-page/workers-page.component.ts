import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { IWorker, workerType } from '../../models';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-workers-page',
  templateUrl: './workers-page.component.html',
  styleUrls: ['./workers-page.component.css']
})
export class WorkersPageComponent implements OnInit {

  workers: IWorker[];
  worker: string = "";

  title = 'Список сотрудников';
  type = workerType;
  public editFormGroup: FormGroup;
  closeResult: string;

  contactId: number | null;
  editId: number | null = 0;

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.getWorkers();
    this.editFormGroup = new FormGroup({
      id: new FormControl(null),
      firstName: new FormControl(null, [Validators.required]),
      secondName: new FormControl(null, [Validators.required]),
      middleName: new FormControl(null),
      phone: new FormControl(null),
      email: new FormControl(null),
      birthday: new FormControl(null, [Validators.required]),
      role: new FormControl(0, [Validators.required])
    });
  }
  async getWorkers(){
    try {
      this.workers = await this.http.getWorker();
    } catch (error) {
      console.log(error);

    }
  }
  async onDeleteWorker(id: number) {
    try {
      await this.http.deleteWorker(id);
    } catch (error) {
      console.log(error);
    }finally{
      this.getWorkers();
    }
  }
  onEditWorker(worker: IWorker) {
    this.editId = worker.id;
    this.editFormGroup.patchValue(worker);
  }
 async onUpdateWorker(){
    try {
      await this.http.updateWorker(this.editFormGroup.value);
      this.editId = null;
    } catch (error) {
      console.log(error);
    }finally{
      this.getWorkers();
    }
  }
  async onAddWorker(worker: IWorker){
    try {
      await this.http.postWorker(worker);
    } catch (error) {
      console.log(error);
    }finally{
      this.getWorkers();
    }
  }
}
