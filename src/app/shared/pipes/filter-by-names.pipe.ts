import { Pipe, PipeTransform } from '@angular/core';
import { IWorker } from '../models';

@Pipe({
  name: 'filterByNames'
})
export class FilterByNamesPipe implements PipeTransform {

  transform(workers: IWorker[], searchName:string): any[] {
    if(!searchName){
      return workers;
    }else{
      const filterWorkers = workers
      ?.filter(worker =>
        (worker.firstName?.toLowerCase().indexOf(searchName?.toLowerCase())!==-1))
      return filterWorkers;
    }
  }

}
