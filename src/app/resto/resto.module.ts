import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderPageComponent } from './containers/order-page/order-page.component';
import { ApiService } from './services/api.service';
import { KitchenComponent } from './containers/kitchen/kitchen.component'
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    OrderPageComponent,
    KitchenComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: OrderPageComponent
      },
      {
        path: 'kitchen',
        component: KitchenComponent
      }
    ])
  ],
  providers: [ApiService],
  exports: [
    OrderPageComponent
  ],
})
export class RestoModule { }
