import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/products/services/products.service';
import { OrdersService } from '../../../services/orders.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  currentOrder = null;
  message = '';
  products: Product[] = [];

  constructor(
    private ordersService: OrdersService,
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.message = '';
    this.currentOrder = this.getOrder(this.route.snapshot.paramMap.get('id'));
    this.getProductList();
  }

  getProductList(): void {
    this.productsService.getAll().subscribe(data => {
      this.products = data;
      console.log("products in OrderDetailsComponent: ", data);
    },
    error => {
      console.log(error);
    });
  }

  getOrder(id): void {
    this.ordersService.get(id).subscribe(data => {
      this.currentOrder = data;
      console.log("get order?", data);
    },
    error => {
      console.log(error);
    });
  }

  updateOrder(): void {
    console.log("made it to updateOrder")
    this.ordersService.update(this.currentOrder.id, this.currentOrder)
      .subscribe(response => {
        console.log(response);
        this.message = 'The order was updated successfully!';
      },
      error => {
        console.log(error);
      });
  }

  deleteOrder(): void {
    this.ordersService.delete(this.currentOrder.id)
      .subscribe(response => {
        console.log(response);
        this.router.navigate(['/orders']);
      },
      error => {
        console.log(error);
      });
  }

  addProductToOrder(): void {
    this.ordersService.update(this.currentOrder.id, this.currentOrder)
      .subscribe(response => {
        console.log(response);
        this.message = 'Product added!';
        this.router.navigate(['/orders/:id']);
      },
      error => {
        console.log(error);
      })
  }
  
}
