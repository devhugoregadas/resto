import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderPageComponent } from './containers/order-page/order-page.component';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    OrderPageComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [ApiService],
  exports: [
    OrderPageComponent
  ],
})
export class RestoModule { }
