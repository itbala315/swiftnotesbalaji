import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trunc'
})
export class TruncPipe implements PipeTransform {
  transform(value:any, args:any) {
    if (args === undefined) {
      return value;
    }

    if (value?.length > args) {
      return value.substring(0, args) + '...';
    } else {
      return value;
    }
  }

}
