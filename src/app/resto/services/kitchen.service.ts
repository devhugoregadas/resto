// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { RecipeInterface } from '../resto.interfaces';
// import { OrderInterface } from './api.service';

// export interface OrderKitchenInterface {
//   placeId: string;
//   data: { quantity: number } & RecipeInterface[];
//   status: 'pending' | 'finish';
// }

// export interface OrderKitchenService{
//   getOrders: () => Promise<OrderKitchenInterface[]>;
//   orderStatus: (status:  'pending' | 'finish', id: string ) => Promise<{ result: boolean }>;
// }

// @Injectable()

// export class KitchenService implements OrderInterface {

//   constructor(private readonly _http: HttpClient) { }

//   async getOrders(): Promise<OrderInterface[]> {
//     const order: OrderKitchenInterface = {
//       placeId: '1645700944878',
//       data: [
//         {
//           quantity: 1,
//           price:5.90,
//           description: '6 pièces.',
//           uuid: '4b6b6d4a-edc7-44be-b15b-251cd664ecfd',
//           title: 'Bouchées Camembert',
//           imageUrl:
//             'https://d1ralsognjng37.cloudfront.net/ca3e2a7e-656d-4169-a5dc-edf57889a77b.jpeg',
//           status: 'pending'
//         },
//         {
//           quantity: 2,
//           price: 4.90,
//           description: '4 pièces.',
//           uuid: '7c019456-f219-4efb-8df9-84e34f36f90b',
//           title: 'Jalapeños',
//           imageUrl:
//             'https://d1ralsognjng37.cloudfront.net/b41df2f8-29af-4ecf-b834-75f93e1d6554.jpeg',
//           status: 'pending'
//         },
//       ],
//     };
//     return [order];
//   }
// }
