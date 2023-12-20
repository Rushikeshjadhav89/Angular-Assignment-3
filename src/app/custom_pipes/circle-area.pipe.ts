import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'circleArea'
})
export class CircleAreaPipe implements PipeTransform {

  transform(value: number, radi:number): any {
    return Math.PI*radi*value;
  }

}
