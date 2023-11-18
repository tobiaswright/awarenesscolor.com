import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateNames'
})
export class TruncateNamesPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    if ( value.length > 22 ) {
      return value.slice(0,22) + "..."
    }
    return value;
  }

}
