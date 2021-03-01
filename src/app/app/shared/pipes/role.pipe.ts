import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'role'
})
export class RolePipe implements PipeTransform {
  private readonly roles: string[] = ['IT', 'Маркетинговый', 'Доставки', 'Юридический'];
  transform(role: number): string {
    return this.roles[role];
  }

}
