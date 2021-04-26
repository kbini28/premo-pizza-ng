import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders: any;
  currentOrder = null;
  currentIndex = -1;
  empid = null;

  constructor(private ordersService: OrdersService) { }

  ngOnInit(): void {
    // loads getAll() method on page load
    this.retrieveOrders();
  }

  // initialize the getAll method
  retrieveOrders(): void {
    this.ordersService.getAll().subscribe(data => {
      this.orders = data;
      console.log("order list component: ", data);
    },
    error => {
      console.log(error);
    });
  }

  // resets the list on refresh 
  refreshList(): void {
    this.retrieveOrders();
    this.currentOrder = null;
    this.currentIndex = -1;
  }

  // sets the pointer to the active order?
  setActiveOrder(order, index) {
    this.currentOrder = order;
    this.currentIndex = index;
    console.log("set active order", order, index)
  }

  // skipped removeAll method

  // findByEmployeeId() method
  searchEmpid(): void {
    this.ordersService.findByEmployeeId(this.empid)
      .subscribe(data => {
        this.orders = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }
}
