import { Injectable } from '@angular/core';
import { RecipeInterface } from '../resto.interfaces';

export interface OrderKitchenInterface {
  placeId: string;
  data: RecipeInterface & { quantity: number }[];
  status: 'pending' | 'finish';
}

export interface OrderKitchenService{
  getOrders: () => Promise<OrderKitchenInterface[]>;
  orderStatus: (status:  'pending' | 'finish', id: string ) => Promise<{ result: boolean }>;
}

@Injectable()

export class KitchenService implements OrderKitchenInterface{

  constructor(private readonly _http: HttpClient) { }

  async getOrders() {
    const order: any = {
      placeId: '1645700944878',
      data: [
        {
          quantity: 1,
          description: '6 pièces.',
          uuid: '4b6b6d4a-edc7-44be-b15b-251cd664ecfd',
          title: 'Bouchées Camembert',
          imageUrl:
            'https://d1ralsognjng37.cloudfront.net/ca3e2a7e-656d-4169-a5dc-edf57889a77b.jpeg',
        },
        {
          quantity: 2,
          description: '4 pièces.',
          uuid: '7c019456-f219-4efb-8df9-84e34f36f90b',
          title: 'Jalapeños',
          imageUrl:
            'https://d1ralsognjng37.cloudfront.net/b41df2f8-29af-4ecf-b834-75f93e1d6554.jpeg',
        },
      ],
      status: 'pending'
    };
    return  [order] ;
  }

  async orderStatus(status:  'pending' | 'finish', id: string ) => Promise<{ result: boolean }>;{
    console.log('orderStatus', JSON.stringify(status));
    return { result: true };
  }

}
