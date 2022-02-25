import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommandeOrder } from '../../resto.interfaces';
import { ApiService, OrderInterface } from '../../services/api.service';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css']
})
export class KitchenComponent implements OnInit {

  orders!: OrderInterface[];
  orderForm!: FormGroup;

  constructor(
    private readonly _service_order: ApiService
  ) { }

  async ngOnInit() {
    // Create order
    this.orderForm = new FormGroup({
      orderId: new FormControl(Date.now()),
      orders: new FormArray([], Validators.compose([
        Validators.required, 
        Validators.minLength(1)
      ]))
    });
    //Load order
    this.orders = await this._service_order.getOrders();
  }

  getOrders(recipe: CommandeOrder) {
    // get FormArray
    const recipes = this.orders.get('orders') as FormArray;
    // find if recipe is already in the form
    const existing = recipes.getRawValue().findIndex(c => c.uuid === recipe.uuid); 
    if (existing > -1) {
      // get control form
      const controls = recipes.at(existing);
      // get current quantity
      const quantity = controls.get('quantity')?.value;
      // update quantity
      controls.get('quantity')?.setValue(quantity + 1);
    } else {
      // create new controls Group
      const recipeForm = new FormGroup({
        quantity: new FormControl(1),
        orderId: new FormControl(recipe.orderId)
      });
      // push to FormArray
      recipes.push(recipeForm);
    }
    // always display form value
    console.log(this.orders.values);
  }

  async sendOrder() {
    const response = await this._service_order.sendOrder(this.orders.values);
  }

}

}
