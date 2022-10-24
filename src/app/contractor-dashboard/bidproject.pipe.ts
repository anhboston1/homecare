import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bidproject'
})
export class BidprojectPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
