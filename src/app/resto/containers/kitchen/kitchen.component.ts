import { Component, OnInit } from '@angular/core';
import { ApiService, OrderInterface } from '../../services/api.service';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css']
  })
  export class KitchenComponent implements OnInit {

    public orders: OrderInterface[] = [];

    constructor(
      private readonly _service: ApiService
    ) { }

    async ngOnInit(){
    this.orders = await this._service.getOrders();
  }

  async updateStatus(order: OrderInterface, status: string) {
    const restult = await this._service.updateOrder({...order, status});
    this.orders = this.orders.map(
      o => o.placeId === order.placeId ? {...o, status} : o);
  }
}