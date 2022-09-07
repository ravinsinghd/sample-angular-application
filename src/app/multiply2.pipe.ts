import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiply2',
})
export class Multiply2Pipe implements PipeTransform {
  transform(value: number, list: string[]): number {
    return value * 2;
  }
}
