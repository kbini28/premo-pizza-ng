import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdersService } from '../../../services/orders.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  currentOrder = null;
  message = '';

  constructor(
    private ordersService: OrdersService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.message = '';
    this.currentOrder = this.getOrder(this.route.snapshot.paramMap.get('id'));
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
  
}
