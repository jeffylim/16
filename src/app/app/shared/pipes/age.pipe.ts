import { Pipe, PipeTransform } from '@angular/core';
import differenceInYears from "date-fns/differenceInYears"
@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: any): number {
    return differenceInYears(new Date(), new Date(`${value.year}-${value.month}-${value.day}`));
  }

}
