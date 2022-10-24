import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchproject'
})
export class SearchprojectPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
