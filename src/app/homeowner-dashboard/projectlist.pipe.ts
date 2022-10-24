import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'projectlist'
})
export class ProjectlistPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
