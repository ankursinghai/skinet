import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { error } from 'protractor';
import { IOrder } from 'src/app/shared/models/order';
import { BreadcrumbService } from 'xng-breadcrumb';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-orders-detailed',
  templateUrl: './orders-detailed.component.html',
  styleUrls: ['./orders-detailed.component.scss'],
})
export class OrdersDetailedComponent implements OnInit {
  order: IOrder;

  constructor(
    private route: ActivatedRoute,
    private breadCrumbService: BreadcrumbService,
    private ordersServices: OrdersService
  ) {
    this.breadCrumbService.set('@OrdersDetailed', '');
  }

  ngOnInit(): void {
    console.log('getOrderDetailed');
    this.ordersServices
      .getOrderDetailed(+this.route.snapshot.paramMap.get('id'))
      .subscribe(
        (order: IOrder) => {          
          this.order = order;
          this.breadCrumbService.set(
            '@OrdersDetailed',
            `Order# ${order.id} - ${order.status}`
          );
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
