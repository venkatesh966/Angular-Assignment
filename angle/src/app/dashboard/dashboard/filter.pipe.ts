import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(members: any, term: any): any {
    if (term === undefined) return members;
    else{
    return members.filter(function(student)
    {
      return student.Name.toLowerCase().indexOf(term.toLowerCase())>-1;
    })
  }
  }
}
