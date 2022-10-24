import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'postproject'
})
export class PostprojectPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
