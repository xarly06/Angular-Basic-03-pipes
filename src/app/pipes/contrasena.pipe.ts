import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, act?: boolean): any {

    if(act){
      value = value.replace(/./g, "*");
    }

    return value;
  }

}
