import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterString: string, property: string) {

    if (value.length === 0 || !filterString) {
      return value;
    }

    let filteredCause: any[] = [];
    for (let item of value) {
      if (item[property].toLowerCase().includes(filterString.toLowerCase())) {
        filteredCause.push(item);
      }
    }

    return filteredCause;

  }

}
