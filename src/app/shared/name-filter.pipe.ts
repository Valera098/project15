import { Pipe, PipeTransform } from '@angular/core';
import { MyWorker } from './worker.model';

@Pipe({
  name: 'nameFilter'
})

export class NameFilterPipe implements PipeTransform {

  transform(workers: MyWorker[], nameFilter: string): MyWorker[] {
    if (nameFilter === '') {
      return workers;
    } else {
      let filterWorker = workers.filter(function(itemName, itemSurname) {
        if (itemName.name.includes(nameFilter)) {
          return itemName.name.indexOf(nameFilter) !== -1;
        }
        else if (itemName.surname.includes(nameFilter)) {
          return itemName.surname.indexOf(nameFilter) !== -1;
        }
      })
      return filterWorker;
    }
  }

}
