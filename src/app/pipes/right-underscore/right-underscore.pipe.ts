import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rightUnderscore'
})
export class RightUnderscorePipe implements PipeTransform {

  transform(value: string, args?: any): unknown {
    value = value.replace(/.*_/, '');
    return value;
  }

}
