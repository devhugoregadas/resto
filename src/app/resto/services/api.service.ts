import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import {
  RecipeGroupInterface,
  RecipeInterface,
  RestorantInterface,
} from '../resto.interfaces';

export interface OrderInterface {
  placeId: string;
  data: RecipeInterface & { quantity: number }[];
}
export interface ApiServiceInterface {
  // Method for Room
  getRecipes: () => Promise<RecipeGroupInterface[]>;
  sendOrder: (orderData: OrderInterface) => Promise<{ result: boolean }>;
  //Method for Kitchen
  getOrders: () => Promise<OrderInterface[]>;
  updateOrder: (orderData: OrderInterface & {status: string}) => Promise<{ result: boolean}>
}

@Injectable()
export class ApiService implements ApiServiceInterface {
  
  constructor(private readonly _http: HttpClient) {}

  async getRecipes(): Promise<RecipeGroupInterface[]> {
    const url = `./assets/data.json`;
    const req = this._http.get<RestorantInterface>(url);
    const result = await firstValueFrom(req);
    return result.data;
  }

  async sendOrder(orderData: OrderInterface): Promise<{ result: boolean }> {
    console.log('sendOrder', JSON.stringify(orderData));
    return { result: true };
  }

  async getOrders(): Promise<OrderInterface[]> {
    const order = {
      placeId: '1645700944878',
      data: [
        {
          price:590,
          quantity: 1,
          description: '6 pièces.',
          uuid: '4b6b6d4a-edc7-44be-b15b-251cd664ecfd',
          title: 'Bouchées Camembert',
          imageUrl:
            'https://d1ralsognjng37.cloudfront.net/ca3e2a7e-656d-4169-a5dc-edf57889a77b.jpeg',
        },
        {
          price:390,
          quantity: 2,
          description: '4 pièces.',
          uuid: '7c019456-f219-4efb-8df9-84e34f36f90b',
          title: 'Jalapeños',
          imageUrl:
            'https://d1ralsognjng37.cloudfront.net/b41df2f8-29af-4ecf-b834-75f93e1d6554.jpeg',
        },
      ],
    };
    return [order];
  }
  
  async updateOrder(orderData: OrderInterface & {status: string}): Promise<{ result: boolean}>{
    console.log('updateOrder', orderData);
    return { result: true }
  }
}
