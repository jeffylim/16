import { Pipe, PipeTransform } from '@angular/core';
import { IWorker } from '../models';

@Pipe({
  name: 'filterBySurnames'
})
export class FilterBySurnamesPipe implements PipeTransform {

  transform(workers: IWorker[], searchSurname:string): any[] {
    if(!searchSurname){
      return workers;
    }else{
      const filterWorkers = workers
      ?.filter(worker =>
        (worker.secondName?.toLowerCase().indexOf(searchSurname?.toLowerCase())!==-1))
      return filterWorkers;
    }
  }

}
