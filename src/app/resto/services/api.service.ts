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
  getRecipes: () => Promise<RecipeGroupInterface[]>;
  sendOrder: (orderData: OrderInterface) => Promise<{ result: boolean }>;
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
}
