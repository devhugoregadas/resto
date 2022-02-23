import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { RecipeGroupInterface, RecipeInterface, RestorantInterface } from '../resto.interfaces';

interface ApiServiceInterface {
  getRecipes: () => Promise<RecipeGroupInterface[]>;
  sendOrder: (orderData: {
    placeId: string; 
    data: RecipeInterface & {quantity: number}[];
  }) => Promise<{result: boolean}>;
}

@Injectable()
export class ApiService implements ApiServiceInterface {
  
  constructor(private http: HttpClient) {

  }
 async getRecipes() {
    const url = '/assets/data/data.json';
    const req = this.http.get<RestorantInterface>(url)
    const result = await firstValueFrom(req)
    return result.data;
  }

  async sendOrder(orderData:  {
    placeId: string; 
    data: RecipeInterface & {quantity: number}[];
  }){
    console.log(orderData);
    return {result: true}
  }
}
