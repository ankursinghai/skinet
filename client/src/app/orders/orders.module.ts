import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import { OrdersDetailedComponent } from './orders-detailed/orders-detailed.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [OrdersComponent, OrdersDetailedComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    SharedModule,
    RouterModule
  ]
})
export class OrdersModule { }
