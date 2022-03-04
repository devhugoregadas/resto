import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderPageComponent } from './containers/order-page/order-page.component';
import { ApiService } from './services/api.service';
import { KitchenComponent } from './containers/kitchen/kitchen.component'
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CountOrderPipe } from './pipes/count-order.pipe';

@NgModule({
  declarations: [
    OrderPageComponent,
    KitchenComponent,
    CountOrderPipe
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        redirectTo: '/order',
        pathMatch: 'full'
      },
      {
        path: 'order',
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
    OrderPageComponent,
    KitchenComponent
  ],
})
export class RestoModule { }
