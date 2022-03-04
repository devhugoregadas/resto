import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countOrder'
})
export class CountOrderPipe implements PipeTransform {

  transform(uuid: string, recipes: { uuid: string, quantity: number}[]): number{
    // Find if recipe is already in the forms
    const existing = (recipes||[]).findIndex( c => c.uuid === uuid);
    if (existing > -1 ){
    // Get quantity from item
      return recipes[existing].quantity;
    }
    return 0;
  }

}
