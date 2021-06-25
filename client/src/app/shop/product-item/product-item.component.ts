import { Component, Input, OnInit } from '@angular/core';
import { BasketService } from 'src/app/basket/basket.service';
import { IProduct } from 'src/app/shared/models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  constructor(private basketService: BasketService) {}

  @Input() product: IProduct;

  ngOnInit(): void {}

  addItemToBasket() {
    this.basketService.addItemToBasket(this.product);
  }
}
